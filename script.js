function printDiv(divId) {
    var printContents = document.getElementById(divId).innerHTML;
    w=window.open();
    w.document.write(printContents);
    w.print();
    w.close();
}