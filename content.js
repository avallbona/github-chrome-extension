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
  if (underlineNavigation) {

    let urlParts = window.location.href.toString().split('/');
    let userOrg = urlParts[3];
    let repo = urlParts[4];

    let domain = "https://github.com";
    let prefix = domain + "/" +userOrg + "/" + repo + "/pulls";
    let linkMyPullRequests = prefix + "/@me";
    let linkMyPendingReviews = prefix + "/review-requested/@me";

    // underline menu
    let myPullRequestsNode = getButton(linkMyPullRequests, "My pull requests", domain);
    let myPendingReviewsNode = getButton(linkMyPendingReviews, "My pending reviews", domain);
    underlineNavigation.insertBefore(myPullRequestsNode, underlineNavigation.lastChild);
    underlineNavigation.insertBefore(myPendingReviewsNode, underlineNavigation.lastChild);

    // responsive underline menu
    let myPullrequestsResponsiveNode = getResponsiveButton(linkMyPullRequests, "My pull requests");
    let myPendingReviewsResponsiveNode = getResponsiveButton(linkMyPendingReviews, "My pending reviews");

    let ulNode = document.querySelector("#js-repo-pjax-container > div.color-bg-secondary.pt-3.hide-full-screen.mb-5 > nav > div > details > div > details-menu > ul");
    ulNode.appendChild(myPullrequestsResponsiveNode);
    ulNode.appendChild(myPendingReviewsResponsiveNode);

  }

}

/**
 * link for the underline nav menu
 * @param link
 * @param name
 * @param domain
 * @returns {HTMLLIElement}
 */
function getButton(link, name, domain){

  let elementLi = document.createElement('li');
  elementLi.className="flex-d";

  let elementA = document.createElement('a');
  elementA.href = link;
  elementA.className = "js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item";
  elementA.dataset.selectedLinks = "repo_pulls checks" + link.replace(domain, '');

  let elementSpan = document.createElement("span");
  elementA.appendChild(elementSpan);
  elementSpan.outerHTML = '<span data-content="'+name+'">'+name+'</span>';
  elementLi.appendChild(elementA);

  return elementLi;

}

/**
 * link for the underline nav responsive menu
 * @param link
 * @param name
 * @param domain
 * @returns {HTMLLIElement}
 */
function getResponsiveButton(link, name, domain){
  let elementLi = document.createElement('li');
  elementLi.setAttribute('data-menu-item', 'i9mypullrequests')

  let elementA = document.createElement('a');
  elementA.href = link;
  elementA.setAttribute("role", "menuItem");
  elementA.className="js-selected-navigation-item dropdown-item";
  elementA.setAttribute("data-selected-links", link.replace(domain, ''));
  elementA.textContent = name;

  elementLi.appendChild(elementA);
  return elementLi;

}

//init buttons
loadButtons();
