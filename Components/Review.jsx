import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { FaStar } from "react-icons/fa6";

const Review = ({review}) => {
    return (
        <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex">
            {
               Array.from({ length: review.rating }, (_, index) => (
              <FaStar key={index} />
            ))
            }
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{
            review.comment
        }</p>
      </CardBody>
      <Divider/>
    </Card>
    )
}
export default Review
