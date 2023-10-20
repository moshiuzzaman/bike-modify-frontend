"use client";

import { Button, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

interface ReviewModalProps {
    handleDelete: any;
    openModal: string | undefined;
    setOpenModal: (value: string | undefined) => void;
}

export default function DeleteModal(props: ReviewModalProps) {
    return (
        <>
            <Modal
                show={props.openModal === "default"}
                onClose={() => props.setOpenModal(undefined)}
            >
                <Modal.Header>Alert</Modal.Header>
                <Modal.Body>
                    <h1>Are you want to delete this?</h1>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => props.handleDelete()}>Done</Button>
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
