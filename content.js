/**
 * Custom extension to let the user have
 * two extra buttons in the navigation bar
 * of the github repos
 */

/**
 * Load the custom buttons
 */
function loadButtons() {

  let underlineNavigation = document.querySelector('.UnderlineNav-body');
  let alreadyExistsButtons = document.querySelector('#my-pull-requests');

  if (underlineNavigation && !alreadyExistsButtons) {

    let urlParts = window.location.href.toString().split('/');
    let userOrg = urlParts[3];
    let repo = urlParts[4];

    let domain = "https://github.com";
    let prefix = domain + "/" +userOrg + "/" + repo + "/pulls";
    let linkMyPullRequests = prefix + "/@me";
    let linkMyPendingReviews = prefix + "/review-requested/@me";

    // underline menu
    let myPullRequestsNode = getButton(linkMyPullRequests, "My pull requests", domain, "my-pull-requests");
    let myPendingReviewsNode = getButton(linkMyPendingReviews, "My pending reviews", domain, "my-pending-reviews");
    underlineNavigation.insertBefore(myPullRequestsNode, underlineNavigation.lastChild);
    underlineNavigation.insertBefore(myPendingReviewsNode, underlineNavigation.lastChild);

    // responsive underline menu
    // let myPullrequestsResponsiveNode = getResponsiveButton(linkMyPullRequests, "My pull requests");
    // let myPendingReviewsResponsiveNode = getResponsiveButton(linkMyPendingReviews, "My pending reviews");
    //
    // let ulNode = document.querySelector("#js-repo-pjax-container > div.color-bg-secondary.pt-3.hide-full-screen.mb-5 > nav > div > details > div > details-menu > ul");
    // ulNode.appendChild(myPullrequestsResponsiveNode);
    // ulNode.appendChild(myPendingReviewsResponsiveNode);


  }

}

/**
 * link for the underline nav menu
 * @param link
 * @param name
 * @param domain
 * @returns {HTMLLIElement}
 */
function getButton(link, name, domain, id){

  let elementLi = document.createElement('li');
  elementLi.className="flex-d";
  elementLi.id=id

  let iconSvg = document.querySelectorAll('.UnderlineNav-body a#pull-requests-tab > svg')[0].cloneNode(true);
  let elementA = document.createElement('a');
  elementA.href = link;
  elementA.dataset.selectedLinks = "repo_pulls checks" + link.replace(domain, '');

  elementA.className = "btn btn-primary btn-sm";
  elementA.style = "height:27px;margin:10px 10px 0 0;line-height:19px;";

  let elementSpan = document.createElement("span");
  if (iconSvg){
    elementA.appendChild(iconSvg);
  }

  elementA.appendChild(elementSpan);
  elementSpan.outerHTML = '<span data-content="'+name+'">'+name+'</span>';
  elementLi.appendChild(elementA);

  return elementLi;

}

// /**
//  * link for the underline nav responsive menu
//  * @param link
//  * @param name
//  * @param domain
//  * @returns {HTMLLIElement}
//  */
// function getResponsiveButton(link, name, domain){
//   let elementLi = document.createElement('li');
//   elementLi.setAttribute('data-menu-item', 'i9mypullrequests')
//
//   let elementA = document.createElement('a');
//   elementA.href = link;
//   elementA.setAttribute("role", "menuItem");
//   elementA.className="js-selected-navigation-item dropdown-item";
//   elementA.setAttribute("data-selected-links", link.replace(domain, ''));
//   elementA.textContent = name;
//
//   elementLi.appendChild(elementA);
//   return elementLi;
//
// }

//init buttons
loadButtons();
document.addEventListener('pjax:end', () => loadButtons());
