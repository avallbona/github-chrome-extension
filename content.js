/**
 * Custom extension to let the user have
 * two extra buttons in the navigation bar
 * of the github repos
 */

/**
 * Load the custom buttons
 */
function loadButtons() {

  let underlineNavigation = document.querySelector('.prc-components-UnderlineItemList-xKlKC');
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

    underlineNavigation.appendChild(myPullRequestsNode);
    underlineNavigation.appendChild(myPendingReviewsNode);

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
  elementLi.className="prc-UnderlineNav-UnderlineNavItem-syRjR";
  elementLi.id=id

  let iconSvgSource = document.querySelectorAll('body > div.logged-in.env-production.page-responsive > div.position-relative.header-wrapper.js-header-wrapper > react-partial:nth-child(7) > div > header > nav > ul > li:nth-child(3) > a > span:nth-child(1) > svg')[0];
  let iconSvg = iconSvgSource ? iconSvgSource.cloneNode(true) : null;
  let elementA = document.createElement('a');
  elementA.href = link;
  elementA.dataset.selectedLinks = "repo_pulls checks" + link.replace(domain, '');

  elementA.className = "btn btn-primary btn-sm";

  let elementSpan = document.createElement("span");
  if (iconSvg){
    elementA.appendChild(iconSvg);
  }

  elementA.appendChild(elementSpan);
  elementSpan.outerHTML = '<span data-content="'+name+'">'+name+'</span>';
  elementLi.appendChild(elementA);

  return elementLi;

}

//init buttons
loadButtons();
document.addEventListener('turbo:load', () => loadButtons());
document.addEventListener('turbo:render', () => loadButtons());
