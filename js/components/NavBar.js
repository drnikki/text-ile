/**
 * js for adding a consistent navbar across site.
 * - relies on a <nav id="site-nav"></nav>
 * - assumes that html file is in the outermost directory
 */

$('#site-nav')
    .addClass("container-fluid")
    .attr("aria-label", "site-wide-navigation")
    .html(`
        <div class="row">
            <div class="col-md-2 col-sm-3 col-xs-6">
                <h1 class="logo">
                    <img src="images/bxl_logo.png" alt="bixolon logo" class="img-responsive">
                </h1>
            </div>
            <div class="col-md-2 col-sm-3 col-xs-6">
                <h1 class="logo p-1" style="height:100%;">
                    <img src="images/djl_logo.png" alt="digital-justice-lab logo" height="100" class="img-responsive">
                </h1>
            </div>
            <ul>
                <li><a href="./">receipt sets</a></li>
                <li><a href="./random-printer.html">random printer</a></li>
            </ul>
        </div>
    `);