import CardLoader from "../components/cardLoader";
import DenseTable from "../components/table";
import SideBar from "../components/sidebar";
import Divider from "../layouts/divider";
import ResponsiveDialog from "../components/dialog";
import { ClientForm } from "../components/form";
import AddIcon from "@mui/icons-material/Add";
export default function PaymentsPage(params) {
  return (
    <>
      <SideBar />
      <Divider
        title={params.title}
        component={
          <>
            <ResponsiveDialog
              icon={<AddIcon />}
              title={"Add Payments"}
              component={<ClientForm />}
            />
            <CardLoader count={4} />
            <DenseTable />
          </>
        }
      />
    </>
  );
}
