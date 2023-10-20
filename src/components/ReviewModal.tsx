"use client";

import { Button, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

interface ReviewModalProps {
    handleReview: any;
    openModal: string | undefined;
    setOpenModal: (value: string | undefined) => void;
}

export default function ReviewModal(props: ReviewModalProps) {
    const [review, setReview] = useState("");

    return (
        <>
           
            <Modal
                show={props.openModal === "default"}
                onClose={() => props.setOpenModal(undefined)}
            >
                <Modal.Header>What was our service?</Modal.Header>
                <Modal.Body>
                    <TextInput
                        onChange={(e) => setReview(e.target.value)}
                        value={review}
                        placeholder="Review"
                    ></TextInput>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => props.handleReview(review)}>
                        Done
                    </Button>
                    <Button
                        color="gray"
                        onClick={() => props.setOpenModal(undefined)}
                    >
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
