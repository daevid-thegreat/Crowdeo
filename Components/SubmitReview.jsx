import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import {FaStar} from "react-icons/fa6";

export default function SubmitReview() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary">Review Company</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Review</ModalHeader>
              <ModalBody>
                  <Input
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
                      isRequired
                      label="Description"
                      placeholder="Enter your description"
                      className="flex"
                    />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Submit Review
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
