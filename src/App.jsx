import React from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "./AppTheme.css";

function BrandedDeleteAlert() {
  const handleDelete = () => {
    Swal.fire({
      title: "Delete Project?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      customClass: {
        popup: "appAlert",
        confirmButton: "appButtonDanger",
        cancelButton: "appButtonSecondary",
      },
      buttonsStyling: false,
    });
  };

  return <button onClick={handleDelete}>Delete Project</button>;
}

export default BrandedDeleteAlert;
