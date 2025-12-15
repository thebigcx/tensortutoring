/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function showPopup(subject, price)
{
    document.getElementById('popup').showModal();

    subjectBody = "";

    switch (subject)
    {
        case 'eng': subjectBody = "<i class=\"bi bi-gear\"></i> Engineering Studies"; break;
        case 'phys': subjectBody = "<i class=\"bi bi-lightbulb\"></i> Physics"; break;
        case 'mathsadv': subjectBody = "<i class=\"bi bi-calculator\"></i> Maths Advanced"; break;
        case 'mathsext1': subjectBody = "<i class=\"bi bi-calculator\"></i> Maths Extension 1"; break;
        case 'mathsext2': subjectBody = "<i class=\"bi bi-calculator\"></i> Maths Extension 2"; break;
        case 'chem': subjectBody = "<i class=\"bi bi-flask\"></i> Chemistry"; break;
        
    }

    document.getElementById('chosen-subject').innerHTML = subjectBody;

    document.getElementById('chosen-price').innerHTML = price.toString();
}