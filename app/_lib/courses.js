"use server";

import { getSession } from "./session";
import db from "./prisma/client";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const addNewCourseActivity = async (page, course) => {

    const session = getSession();
    const alreadyViewedPage = await db.courseActivity.findFirst({ where: { url: page } });
    if (!alreadyViewedPage) {
        await db.courseActivity.create({
            data: {
                user: {
                    connect: { id: session }
                },
                url: page
            }
        })
        revalidateTag(`${course}PageViewed`)
    } else {
        await db.courseActivity.updateMany({
            where: {
                url: page
            },
            data: {
                updatedAt: new Date()
            }
        })
    }
}

export const getCourseActivity = async (course) => {
    const baseUrl = process.env.PRODUCTION === 'true' ? 'https://personality.academy' : 'http://localhost:3000';
    const hasSession = cookies().has('PAsession');
    const viewedPagesReq = await fetch(`${baseUrl}/api/course_activity?` + new URLSearchParams({ course, session: hasSession ? cookies().get('PAsession').value : ''}), { next: { tags: [`${course}PageViewed`] } });
    const viewedPages = await viewedPagesReq.json();
    return viewedPages
}