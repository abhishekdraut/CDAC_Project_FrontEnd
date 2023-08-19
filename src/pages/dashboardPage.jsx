import SideBar from "../components/sidebar";
import Divider from "../layouts/divider";
export default function DashboardPage(params) {
  return (
    <>
      <SideBar />
      <Divider
        title={params.title}
        component={
          <>
            
          </>
        }
      />
    </>
  );
}
