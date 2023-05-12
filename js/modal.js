let shutdownModal = bootstrap.Modal.getOrCreateInstance(
  document.getElementById("shutdownNotice")
);

setTimeout(function () {
  shutdownModal.show();
}, 1000);
