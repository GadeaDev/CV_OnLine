$(document).ready(function () {

    $('h1').text(person.firstname + " " + person.lastname);

    $('.img-profile').attr('src', person.image);
    $('.img-profile').attr('alt', person.firstname);

    $('#address').text(person.address);
    $('#phone').text(person.phone);
    $('#email').attr('href', person.email);
    $('#email').text(person.email);
    $('#nationality').text(person.nationality);

    $('#linkedin').attr('href', person.linkedin);
    $('#facebook').attr('href', person.facebook);
    $('#twitter').attr('href', person.twitter);
    $('#github').attr('href', person.github);

    person.jobs.forEach(function(job) {
        var job_container = '\
            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">\
                <div class="resume-content">\
                    <h3 class="mb-0">' + job.title + '</h3>\
                    <div class="subheading mb-3">' + job.company + '</div>\
                    <p class="lead mb-5"><span class= "subheading" >Actividades: </span>'+job.tareas+'</p>\
                </div>\
                <div class="resume-date text-md-right">\
                    <span class="text-primary">' + job.year_from + ' – ' + job.year_to + '</span>\
                </div>\
            </div>';
        
        $('#jobs-container').append(job_container);
    });

    person.education.forEach(function (edu) {
        var education_container = '\
            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">\
                <div class="resume-content">\
                    <h3 class="mb-0">' + edu.institution + '</h3>\
                    <div class="subheading mb-3">' + edu.course + '</div>\
                </div>\
                <div class="resume-date text-md-right">\
                    <span class="text-primary">' + edu.year_from + ' – ' + edu.year_to + '</span>\
                </div>\
            </div>';

        $('#educations-container').append(education_container);
    });

});

