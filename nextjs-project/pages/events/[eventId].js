import { useRouter } from "next/router";

import { getEventById } from "../../dummy-data";

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  getEventById();

  return (
    <div>
      <h1>Event Detail</h1>
    </div>
  );
}

export default EventDetailPage;
