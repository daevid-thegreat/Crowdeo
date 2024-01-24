import React from "react";
import {Card, CardHeader, CardBody, Divider, Link} from "@nextui-org/react";

export default function CompanyCard({company}) {
  return (
      <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                  <p className="text-md">{
                      company.name
                  }</p>
              </div>
          </CardHeader>
          <Divider/>
          <CardBody>
              <p>{
                    company.description
              }</p>
          </CardBody>
          <Divider/>
          <Link className="text-small text-default-500 p-4" href={`/companies/${company.id}`}>View</Link>
      </Card>
  );
}
