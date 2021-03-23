/**
 * adjust_offset.js
 * 
 * Fixed/sticky navbar obscures section header. This adjusts location browser
 * scrolls to when a specific location is requested
 * 
 * From <https://github.com/twbs/bootstrap/issues/1768#issuecomment-6531466>
 */
!function() {
  var shiftWindow = function() { scrollBy(0, -60) };
  if (location.hash) shiftWindow();
  window.addEventListener("hashchange", shiftWindow);
}();