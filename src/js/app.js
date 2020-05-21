import './utils/initSwipers';
import 'swiper/js/swiper.min'
import 'bootstrap.native/dist/bootstrap-native-v4';
import 'bootstrap.native/lib/V4/utils';

let smoothScrollUp = document.getElementById('scroll-up');

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -60);
        setTimeout(backToTop, 0);
    }
}
smoothScrollUp.addEventListener('click', backToTop);

// window.onscroll = function() {
//     var scrolled = window.pageYOffset || document.documentElement.scrollTop;
//     if (scrolled > 100) {
//         document.getElementById('upbutton').style.display = 'block';
//     } else {
//         document.getElementById('upbutton').style.display = 'none';
//     }
// };



let searchBlockInput = document.getElementById('search-block-input'),
    searchBlockForm = document.getElementById('search-block-form'),
    mapFilter = document.getElementById('map-filter'),
    mapFilterHidePanelBtn = document.getElementById('filter-map-hide-panel-btn'),
    mapFilterShowPanelBtn = document.getElementById('filter-map-show-panel-btn'),
    selectSkillsTitle = document.getElementById("select-skills-title"),
    selectSkillsText = document.getElementById("select-skills-text"),
    selectSkillsListWrap = document.getElementById("select-skills-list-wrap"),
    selectSkillsList = document.getElementById("select-skills-list");

searchBlockInput.onfocus = function () {
    searchBlockForm.classList.add('search-block__form-focused');
};
searchBlockInput.onblur = function () {
    if (searchBlockForm.classList.contains('search-block__form-focused')) {
        searchBlockForm.classList.remove('search-block__form-focused');
    }
};

mapFilterHidePanelBtn.onclick = function () {
    mapFilter.classList.remove("d-block");
    mapFilter.classList.add("d-none");
    mapFilterShowPanelBtn.classList.remove("d-none");
    mapFilterShowPanelBtn.classList.add("d-block");
};

mapFilterShowPanelBtn.onclick = function () {
    mapFilter.classList.remove("d-none");
    mapFilter.classList.add("d-block");
    mapFilterShowPanelBtn.classList.remove("d-block");
    mapFilterShowPanelBtn.classList.add("d-none");
};


function toggleList(marginX) {
    let skillsChecked = document.querySelectorAll('.select-skills__checkbox-item > input:checked');
    if (skillsChecked.length > 0) {
        selectSkillsTitle.classList.remove("col-lg-6");
        selectSkillsTitle.classList.add("text-center");
        selectSkillsText.classList.remove("d-block");
        selectSkillsText.classList.add("d-none");
        if (window.innerWidth < 1024) {
            selectSkillsTitle.style.margin = marginX + 'px 0';
        }
        selectSkillsListWrap.classList.remove("d-none");
        selectSkillsListWrap.classList.add("d-block");
    } else {
        selectSkillsTitle.classList.add("col-lg-6");
        selectSkillsTitle.classList.remove("text-center");
        selectSkillsText.classList.remove("d-none");
        selectSkillsText.classList.add("d-block");
        selectSkillsTitle.style.margin = '0';
        selectSkillsListWrap.classList.remove("d-block");
        selectSkillsListWrap.classList.add("d-none");
    }
}

let skillsArr = document.getElementsByName("skill");
let j, k;
for (k = 0; k < skillsArr.length; k++) {
    skillsArr[k].onclick = function (event) {
        let skillsListItems = document.querySelectorAll('.select-skills__list li');
        let marginX = selectSkillsText.offsetHeight / 2;
        if (marginX !== 0) {
            toggleList(marginX);
        } else {
            let newMargin = selectSkillsTitle.style.marginTop;
            toggleList(newMargin);
        }

        if (event.currentTarget.checked) {
            for (j = 0; j < skillsListItems.length; j++) {
                if (skillsListItems[j].innerHTML === event.currentTarget.value) {
                    skillsListItems[j].remove();
                }
            }
            let liLast = document.createElement('li');
            liLast.innerHTML = event.currentTarget.value;
            selectSkillsList.append(liLast); // вставить liLast в конец <ul>
        } else {
            for (j = 0; j < skillsListItems.length; j++) {
                if (skillsListItems[j].innerHTML === event.currentTarget.value) {
                    skillsListItems[j].remove();
                }
            }
        }
    }
}
