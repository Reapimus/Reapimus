var projects = document.getElementsByClassName("project");

for (var i = 0; i < projects.length; i++) {
    projects[i].addEventListener("click", function () {
        var projectLink = this.getElementsByClassName("project-link")[0];
        var projectHref = projectLink.getAttribute("href");
        if (projectHref != "#") {
            window.open(projectHref, '_blank');
        }
    });
}