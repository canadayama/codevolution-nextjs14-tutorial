import Card from "@/components/card";
import Link from "next/link";

const ArchivedNotifications  = () => {
  return (
    <Card>
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-3xl">Archived Notifications</h2>
        <Link href="/complex-dashboard">Default</Link>
      </div>
    </Card>
  )
}

export default ArchivedNotifications;