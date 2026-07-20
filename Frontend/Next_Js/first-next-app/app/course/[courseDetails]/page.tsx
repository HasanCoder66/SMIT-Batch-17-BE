import React from 'react'

type CourseDetail = {
  params: Promise<{
    courseDetails: string;
  }>;
};

const CourseDetailsPage = async ({params}: CourseDetail) => {

    const data = await params;
    console.log("data mai kiya ayaa....",data);
    
  return (
    <div>This is course detail page.... {data.courseDetails}</div>
  )
}

export default CourseDetailsPage