"use client";

import { getSession } from "@lib/session";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { addNewCourseActivity } from "@lib/courses";
import Link from "next/link";

const coursesInfo = {
    ops: [
        { title: 'Introduction', url: '/ops/intro' },
        { title: 'Purpose of OPS', url: '/ops/purpose' },
        { title: 'Objective Method', url: '/ops/objective_method' },
        { title: 'Savior & Demon', url: '/ops/savior_demon' },
        { title: 'Human Needs', url: '/ops/human_needs' },
        { title: 'Letters', url: '/ops/letters' },
        { title: 'Functions', url: '/ops/functions' },
        { title: 'Animals', url: '/ops/animals' },
        { title: 'Modalities', url: '/ops/modalities' },
        { title: 'Extroversion', url: '/ops/extroversion' },
        { title: 'Social Hierarchy', url: '/ops/social' },
        { title: 'Animal Modalities', url: '/ops/animal_modalities' },
        { title: 'Quadras', url: '/ops/quadras' },
    ],
    typing: [
        { title: 'Expectations', url: '/typing/expectations' },
        { title: 'A Better Way', url: '/typing/better_way' },
        { title: 'Truth', url: '/typing/truth' },
        { title: 'Psychology', url: '/typing/psychology' },
        { title: 'Perception', url: '/typing/perception' },
        { title: 'Identity', url: '/typing/identity' },
        { title: 'Biases', url: '/typing/biases' },
        { title: 'Triangulation', url: '/typing/triangulation' },
        { title: 'Typing Teams', url: '/typing/typing_teams' }, 
        { title: 'D&S Typing (OPS)', url: '/typing/d&s_typing' },
    ]
}

const CoursePagination = ({ currentIndex, courseInfo, coursePath }) => {
    const prevInfo = courseInfo[currentIndex - 1];
    const nextInfo = courseInfo[currentIndex + 1];

    return (
        <div className="course_activity-pagination">
            { prevInfo && 
                <Link className="course_activity-pagination_prev" href={prevInfo.url}>
                    <img src="/img/main/section_btn.png" />
                    {prevInfo.title}
                </Link> 
            }
            <Link className="course_activity-pagination_home" href={coursePath}>
                <img src="/img/learn/course_home.png" />
            </Link>
            { nextInfo && 
                <Link className="course_activity-pagination_next" href={nextInfo.url}>
                    {nextInfo.title}
                    <img src="/img/main/section_btn.png" />
                </Link> 
            }
        </div>
    )

} 

export default function CourseViewer({ course, children }) {
    const pathname = usePathname();
    const router = useRouter();
    const coursePath = '/' + course;
    const courseInfo = coursesInfo[course];

    const [activityWidth, setActivityWidth] = useState('0%');
    const [currentIndex, setCurrentIndex] = useState(null);

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

        if (pathname !== coursePath) {
            const courseIndex = courseInfo.findIndex(page => page.url === pathname);
            if (courseIndex === -1) {
                router.push('/');
            } else {
                setCurrentIndex(courseIndex);
            }
        }

        document.body.overflow = 'auto';
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
                document.body.overflow = 'auto';
            }
        }
    }, [activityWidth]);

    useEffect(() => {
        if (pathname !== coursePath) {
            const courseIndex = courseInfo.findIndex(page => page.url === pathname);
            if (courseIndex === -1) {
                router.push('/');
            } else {
                setCurrentIndex(courseIndex);
            }
        }
    }, [pathname])

    if (pathname === coursePath) return children;

    return (
        <div className="main">
            <div className='course_activity-tracker' style={{width: `${activityWidth}%`}}></div>
            {children}
            <CoursePagination currentIndex={currentIndex} courseInfo={courseInfo} coursePath={coursePath} />
        </div>
    )
}