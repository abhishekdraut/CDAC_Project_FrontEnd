import DenseTable from "../components/table";
import SideBar from "../components/sidebar";
import Divider from "../layouts/divider";
import ResponsiveDialog from "../components/dialog";
import { ClientForm } from "../components/form";
import AddIcon from "@mui/icons-material/Add";
export default function ClientPage(params) {
  return (
    <>
      <SideBar />
      <Divider
        title={params.title}
        component={
          <>
            <ResponsiveDialog
              icon={<AddIcon />}
              title={"Add Clients"}
              component={<ClientForm />}
            />

            <DenseTable />
          </>
        }
      />
    </>
  );
}
