/**
 * Custom extension to let the user have
 * two extra buttons in the navigation bar
 * of the github repos
 */

document.onreadystatechange = () => {

  let underlineNavigation = document.querySelector('.UnderlineNav-body');

  if (underlineNavigation) {

    let urlParts = window.location.href.toString().split('/');
    let userOrg = urlParts[3];
    let repo = urlParts[4];

    let prefix = "https://github.com/" + userOrg + "/" + repo + "/pulls";
    let linkMyPullRequests = prefix + "/@me";
    let linkMyPendingReviews = prefix + "/review-requested/@me";

    let selector = document.querySelectorAll('.UnderlineNav-body a')

    // let container = document.querySelector('nav.js-repo-nav js-sidenav-container-pjax js-responsive-underlinenav overflow-hidden UnderlineNav px-3 px-md-4 px-lg-5 color-bg-secondary');
    // let container = document.querySelectorAll('nav')[1];

    let myPullRequestsNode = selector[2].cloneNode(2);
    myPullRequestsNode.href = linkMyPullRequests;
    myPullRequestsNode.children[1].textContent = 'My pull requests';
    myPullRequestsNode.className.replace(' selected ', '');
    myPullRequestsNode.children[2].remove();
    myPullRequestsNode.className = "btn btn-primary btn-sm";
    myPullRequestsNode.style = "height:28px;margin:10px 10px 0 0";

    underlineNavigation.insertAdjacentElement("beforeend", myPullRequestsNode);
    // container.insertAdjacentElement("beforeend", myPullRequestsNode);

    let myPendingReviewsNode = selector[2].cloneNode(2);
    myPendingReviewsNode.href = linkMyPendingReviews;
    myPendingReviewsNode.children[1].textContent = "My pending code reviews"
    myPendingReviewsNode.children[2].remove();
    myPendingReviewsNode.className = "btn btn-primary btn-sm";
    myPendingReviewsNode.style = "height:28px;margin-top:10px";
    underlineNavigation.insertAdjacentElement("beforeend", myPendingReviewsNode);
    // container.insertAdjacentElement("beforeend", myPendingReviewsNode);

  }

};
