$(document).ready(function() {
    let html = "";
    fetch("http://localhost:3002/api/test")
        .then(res => res.json())
        .then(data => {
            let body = data.body;
            if (body.style != undefined) {
                $("body").attr("style", body.style);
            }
            if (body.child.length != 0) {
                child(body.child);
            }
            $("body").append(html);
        })
        .catch(error => console.log(error));

    let child = (tags) => {
        for (let tag of tags) {
            // console.log(tag);
            console.log(tag.element);
            let tagElement = `<${tag.element}></${tag.element}>`;
            console.log(tagElement);
            console.log(tag.style);
            $(tag.element).attr("style", tag.style);
            if (tag.src != undefined) {
                console.log(tag.src);
                $(`${tag.element}`).attr("src", `img/${tag.src}`);
            }

            if (tag.child != undefined) {
                if (tag.child.length != 0) {
                    child(tag.child);
                }

            }
            html += tagElement;
        }
    }
});