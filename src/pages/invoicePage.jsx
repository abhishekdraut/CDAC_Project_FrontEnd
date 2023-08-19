import CardLoader from "../components/cardLoader";
import DenseTable from "../components/table";
import SideBar from "../components/sidebar";
import Divider from "../layouts/divider";
import ResponsiveDialog from "../components/dialog";
import DynamicFormForInvcoie from "../components/form";
import AddIcon from "@mui/icons-material/Add";

function InvoicePage(params) {
  return (
    <>
      <SideBar />
      <Divider
        title={params.title}
        component={
          <>
            <ResponsiveDialog
              icon={<AddIcon />}
              title={"Add Invoice"}
              component={<DynamicFormForInvcoie />}
            />
            <CardLoader count={3} />
            <DenseTable />
          </>
        }
      />
    </>
  );
}

export default InvoicePage;
