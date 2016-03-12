// info in  catSelection 
var cats = ["Silvia", "Golphy", "Cutie", "Sadie", "Naughty"];

// info in displayArea
var catInfo = {
        "Silvia":
            {
                "pic" : "cat1.jpg",
                "numClick" : 0
            },
        "Golphy":
            {
                "pic" : "cat2.jpg",
                "numClick" : 0
            },
        "Cutie":
            {
                "pic" : "cat3.jpg",
                "numClick" : 0
            },
        "Sadie": 
            {
                "pic" : "sadie.jpg",
                "numClick" : 0
            },
        "Naughty": 
            {
                "pic" : "naughty.jpg",
                "numClick" : 0
            }                       
        };
for (i = 0; i < cats.length; i++) {
    var cat = cats[i];

    // create <div>
    var catElement = document.createElement('div');
    catElement.className = 'catSection';

    // create <a>
    var catElementLink = document.createElement('a');   
    catElementLink.id = cats[i];    
    catElementLink.textContent = cat;

    catElement.appendChild(catElementLink);
    catElementLink.href = "#";
    $("#catSelection").append(catElement);

    // create display area
    var display = document.createElement('div');
    display.className = 'displayArea';

    // add event listener 
    catElementLink.addEventListener('click', function(){

        //hide the hint
        $("#hint").hide();
        //get id
        var catID = $(this).attr('id');

        // clear out previous text
        $("#catName").text("");
        $("#catPic").text("");
        $("#catNumClick").text("");

        // append name, pic and click count
        $("#catName").append("Cat name: " +catID);
        $("#catNumClick").append("Number of clicks: "+ catInfo[catID].numClick); 
        $("#catPic").append('<img src="'+  catInfo[catID].pic +'">');

        // clear out previous click count text and increment the click count number when user clicks on the image
        document.getElementById("catPic").onclick = function(){
            $("#catNumClick").text("");
            catInfo[catID].numClick++;
            $("#catNumClick").append("Number of clicks: "+ catInfo[catID].numClick);
        }
    });
}

