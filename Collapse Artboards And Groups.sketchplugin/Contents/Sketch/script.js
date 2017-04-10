var onRun = function(context) {
  var doc = context.document
  var currentArtboard = doc.findCurrentArtboardGroup()

  doc.currentPage().deselectAllLayers()

  var action = doc.actionsController().actionForID("MSCollapseAllGroupsAction")

  if(action.validate()) {
    action.doPerformAction(null)
    currentArtboard.select_byExpandingSelection(true, false)
  } else {
    log("Failed to perform MSCollapseAllGroupsAction: invalid action ID.")
  }
};
