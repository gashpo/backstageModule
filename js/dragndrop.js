var example1 = document.getElementById("example1"),
  example2Left = document.getElementById("example2-left"),
  example2Right = document.getElementById("example2-right"),
  example3Left = document.getElementById("example3-left"),
  example3Right = document.getElementById("example3-right"),
  example4Left = document.getElementById("example4-left"),
  example4Right = document.getElementById("example4-right"),
  example5 = document.getElementById("example5"),
  example6 = document.getElementById("example6"),
  example7 = document.getElementById("example7"),
  gridDemo = document.getElementById("gridDemo"),
  multiDragDemo = document.getElementById("multiDragDemo"),
  swapDemo = document.getElementById("swapDemo");

var nestedSortables = [].slice.call(
  document.querySelectorAll(".nested-sortable")
);

// Loop through each nested sortable element
for (var i = 0; i < nestedSortables.length; i++) {
  new Sortable(nestedSortables[i], {
    group: "nested",
    animation: 150,
    fallbackOnBody: true,
    handle: ".handle",
    swapThreshold: 0.65,
    ghostClass: "drag-insert-line",
  });
}
