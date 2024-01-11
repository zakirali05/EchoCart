"use server";

import { db } from "./db";

export const getUserFromId = async (id: string | undefined) => {
  try {
    if (!id) {
      throw new Error("id must be provided!");
    }

    const user = await db.user.findUnique({
      where: {
        externalId: id,
      },
    });

    if (!user) {
      throw new Error("no such user exists!");
    }

    return user;
  } catch (err) {
    throw new Error("something went wrong! [getUserFromId]");
  }
};
