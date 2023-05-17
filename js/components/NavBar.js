/**
 * js for adding a consistent navbar across site.
 * - relies on a <nav id="site-nav"></nav>
 * - assumes that html file is in the outermost directory
 */

$('#site-nav')
    .addClass("navbar navbar-expand-lg")
    .attr("aria-label", "site-wide-navigation")
    .html(`
            <div class="navbar-brand">
                <h1 class="logo">
                    <img src="images/bxl_logo.png" alt="bixolon logo" class="img-responsive">
                </h1>
            </div>
            <div class="navbar-brand">
                <h1 class="logo p-1" style="height:100%;">
                    <a href="https://digitaljusticelab.com/" target="_blank"><img src="images/djl_logo.png" alt="digital-justice-lab logo" height="100" class="img-responsive"></a>
                </h1>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#site-nav-links" aria-controls="site-nav-links" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="site-nav-links">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="./">receipt sets</a></li>
                <li class="nav-item"><a class="nav-link" href="./random-printer.html">random printer</a></li>
            </ul>
            </div>
    `);