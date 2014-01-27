function(doc) {
  if (doc._id.substr(0, 9) === "form:") {
    emit(doc._id);
  }
};