"use client";

import { getSession } from "@lib/session";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { addNewCourseActivity } from "@lib/courses";

export default function CourseViewer({ course, children }) {
    const pathname = usePathname();
    const coursePath = '/' + course

    const [activityWidth, setActivityWidth] = useState('0%');

    const newCourseActivity = async () => {
        await addNewCourseActivity(pathname, course);
    }

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;

            const scrolledPercentage = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);
            
            setActivityWidth(scrolledPercentage);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    useEffect(() => {
        if (pathname != coursePath && activityWidth >= 95) {
            const session = getSession();
            if (session) {
                newCourseActivity();
            }
        }
    }, [activityWidth, pathname])

    if (pathname === coursePath) return children;

    return (
        <>
            <div className='course_activity-tracker' style={{width: `${activityWidth}%`}}></div>
            {children}
        </>
    )
}