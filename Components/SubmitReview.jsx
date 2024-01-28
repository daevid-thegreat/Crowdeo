'use client';

import {Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/react";
import React, {useEffect, useState} from "react";

import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import {FaStar} from "react-icons/fa6";
import {Textarea} from "@nextui-org/react";

export default function SubmitReview({company_id}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [isVisible, setIsVisible] = useState(false);
  const [userAccount, setUserAccount] = React.useState(null);

  const handleReviewButtonClick = () => {
    if (userAccount) {
      onOpen();
    } else {
      alert("Please connect an Ethereum wallet.");
    }
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  useEffect(() => {
    const savedUserAccount = localStorage.getItem("userAccount");
    if (savedUserAccount) {
      setUserAccount(savedUserAccount);
    }
  }, []);

  const submit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = {
      rating: data.get("rating"),
      comment: data.get("comment"),
      passcode: data.get("passcode"),
      companyId: company_id,
      userAddress: userAccount
    };
    
    fetch("http://localhost:3000/api/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        alert("Review submitted successfully");
      } else {
        alert("Review failed to submit");
      }
    });
  };

  return (
    <>
      <Button onPress={handleReviewButtonClick} color="primary">Review Company</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <form onSubmit={submit}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Review</ModalHeader>
              <ModalBody>
                
                  <Input
                  name="rating"
                      isRequired
                      type="number"
                      label="Rating"
                      placeholder="0"
                      min={1}
                      max={5}
                      labelPlacement="outside"
                      startContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">
                              <FaStar />
                          </span>
                        </div>
                      }
                    />

                  <Textarea
                      name="comment"
                      isRequired
                      label="Comment"
                      placeholder="Enter your comment"
                      className="flex"
                    />

                  <Input
                      isRequired
                      name="passcode"
          label="PassCode"
          variant="bordered"
          placeholder="Enter your passcode"
          endContent={
            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="pointer-events-none flex items-center"
    />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" type="submit">
                  Submit Review
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
        </form>
      </Modal>
    </>
  );
}
