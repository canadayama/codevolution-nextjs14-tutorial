import Card from "@/components/card";
import Link from "next/link";

const Notifications = () => {
  return (
    <Card>
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-3xl">Notifications</h2>
        <Link href="/complex-dashboard/archived">Archived</Link>
      </div>
    </Card>
  )
};

export default Notifications;