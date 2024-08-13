"use server"

import { revalidatePath } from "next/cache"
import { db } from "../_lib/prisma"

export const deleteBooking = async (booking_id: string) => {
  await db.booking.delete({
    where: {
      id: booking_id,
    },
  })
  revalidatePath("/bookings")
}
