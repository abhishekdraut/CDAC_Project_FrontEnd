import { useState } from "react";
import "../assets/styles/Form/form.scss";
import Switch from "@mui/material/Switch";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Select from "@mui/material/Select";
import ResponsiveDialog from "./dialog";
import FindAndSelect from "./findAndSelect";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
function DynamicFormForInvcoie(params) {
  const [enableRecField, setEnableRecField] = useState(false);
  const [recurringCycle, setRecurringCycle] = useState("");
  //   const [totalSum, setTotalSum] = useState(0);
  let totalSum = 0;
  const [products, setProducts] = useState([
    generate(12, "Product1", 500, 9),
    generate(13, "Product1", 600, 2),
    generate(1, "Product1", 100, 5),
  ]);

  function generate(id, name, unitPrice, quantity) {
    totalSum = totalSum + unitPrice * quantity;
    return { id, name, unitPrice, quantity, totalPrice: unitPrice * quantity };
  }
  const handleChange = (event) => {
    setRecurringCycle(event.target.value);
  };

  return (
    <div className="form_outer">
      <form>
        <div className="first_form_row form_row">
          <div className="form_item">
            <label for="client">Enter the client name</label>
            <input
              placeholder="Chose the client"
              type="text"
              name="client"
              class="input"
              disabled
            ></input>
            <div className="client_selection_option">
              <ResponsiveDialog
                icon={<AddIcon />}
                title={"Add Client"}
                component={<ClientForm />}
              />
              <ResponsiveDialog
                icon={<PersonSearchIcon />}
                title={"Find And Select"}
                component={<FindAndSelect id={"client"} />}
              />
            </div>
          </div>

          <div className="form_item">
            <label for="status">Enter the status</label>
            <input
              placeholder="status"
              type="text"
              name="status"
              class="input"
            ></input>
          </div>
        </div>
        <div className="second_form_row form_row">
          <div className="form_item">
            <label for="issueDate">Enter the issue date</label>
            <input
              placeholder="issueDate"
              type="date"
              name="issueDate"
              class="input"
            ></input>
          </div>

          <div className="form_item">
            <label for="dueDate">Enter the due date</label>
            <input
              placeholder="Due Date"
              type="date"
              name="dueDate"
              class="input"
            ></input>
          </div>

          <div className="form_item">
            <label for="dueDate">Enter product</label>
            <input
              placeholder="Product"
              type="text"
              name="product"
              class="input"
              disabled
            ></input>
            <div className="product_selection_container">
              <ResponsiveDialog
                icon={<AddIcon />}
                title={"Add Product"}
                component={<ProductForm />}
              />
              <ResponsiveDialog
                icon={<ShoppingCartIcon />}
                title={"Find And Select"}
                component={<FindAndSelect id={"client"} />}
              />
            </div>
          </div>
        </div>

        <div className="third_form_row form_row">
          <TableContainer component={Paper} style={{ marginTop: "30px" }}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Product Id</TableCell>
                  <TableCell align="right">Product Name</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Unit Price</TableCell>
                  <TableCell align="right">Total Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow
                    key={product?.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {product?.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {product?.name}
                    </TableCell>
                    <TableCell align="right">{product?.quantity}</TableCell>
                    <TableCell align="right">{product?.unitPrice}</TableCell>
                    <TableCell align="right">{product?.totalPrice}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div class="card checkout checkout_card">
            <label class="title">Checkout</label>
            <div class="details">
              <span>Your subtotal:</span>
              <span>{totalSum}</span>
              <span>Discount through applied coupons:</span>
              <span>0%</span>
              <span>Shipping fees:</span>
              <span>0%</span>
            </div>
            <div class="checkout--footer">
              <label class="price">
                <sup><CurrencyRupeeIcon/></sup>{totalSum}
              </label>
              <button class="checkout-btn">Checkout</button>
            </div>
          </div>
        </div>

        <div className="fourth_form_row form_row">
        <div className="rec_lable">
            <div className="text">
            Recurring cycle
            </div>
       
        <Switch onClick={() => setEnableRecField(!enableRecField)} />
        </div>
          
          {enableRecField ? (
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ fontSize: "15px" }}
                >
                  Recurring cycle
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={recurringCycle}
                  label="Recurring cycle"
                  onChange={handleChange}
                >
                  <MenuItem value={3}>3 Months</MenuItem>
                  <MenuItem value={6}>6 Months</MenuItem>
                  <MenuItem value={12}>12 Months</MenuItem>
                </Select>
              </FormControl>
            </Box>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
}

export function ClientForm(params) {
  return (
    <div className="form_outer">
      <form>
        <div className="first_form_row form_row">
          <div className="form_item">
            <label for="clientName">Enter client's name</label>
            <input
              placeholder="Add client name"
              type="text"
              name="client"
              class="input"
              id="client_name_field"
            ></input>
          </div>

          <div className="form_item">
            <label for="status">Enter client status</label>
            <input
              placeholder="status"
              type="text"
              name="status"
              class="input"
              id="client_status_field"
            ></input>
          </div>
        </div>
        <div className="second_form_row form_row">
          <div className="form_item">
            <label for="mobileNumber">Enter the clients Mobile Number</label>
            <input
              placeholder="issueDate"
              type="number"
              name="mobileNumber"
              class="input"
              id="client_phone_field"
            ></input>
          </div>

          <div className="form_item">
            <label for="email">Enter Client Email </label>
            <input
              placeholder="Enter your email"
              type="email"
              name="email"
              class="input"
              id="client_email_field"
            ></input>
          </div>

          <div className="form_item">
            <label for="address">Enter Clients Address</label>
            <textarea
              placeholder="Address"
              type="text"
              name="address"
              class="input"
              id="client_address_field"
            ></textarea>
          </div>
        </div>
        <div className="third_for_row form_row">
          <div className="form_item">
            <label for="postalCode">Enter Client's postal code</label>
            <input
              placeholder="postal code"
              type="number"
              name="postalCode"
              class="input"
              id="client_postal_code_field"
            ></input>
          </div>
          <div className="form_item">
            <label for="country">Enter Client's Contry</label>
            <input
              placeholder="country"
              type="email"
              name="country"
              class="input"
              id="client_country_field"
            ></input>
          </div>
          <div className="form_item">
            <label for="state">Enter Client's State</label>
            <input
              placeholder="state"
              type="state"
              name="country"
              class="input"
              id="client_stste_field"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export function ProductForm() {
  const [productCategory, setProduct] = useState("");
  const handleChange = (event) => {
    setProduct(event.target.value);
  };
  return (
    <div className="form_outer">
      <form>
        <div className="first_form_row form_row">
          <div className="form_item">
            <label for="productName">Enter Products's name</label>
            <input
              placeholder="Enter products Name"
              type="text"
              name="productName"
              class="input"
            ></input>
          </div>
        </div>
        <div className="second_form_row form_row">
          <div className="form_item">
            <label>Select Products Category</label>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ fontSize: "15px" }}
                >
                  Product Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={productCategory}
                  label="Recurring cycle"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Product 1</MenuItem>
                  <MenuItem value={2}>Product 2</MenuItem>
                  <MenuItem value={3}>Product 3</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        <div className="third_for_row form_row">
          <div className="form_item">
            <label for="mobileNumber">Enter Products Unit Price</label>
            <input
              placeholder="issueDate"
              type="number"
              name="mobileNumber"
              class="input"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
export default DynamicFormForInvcoie;
