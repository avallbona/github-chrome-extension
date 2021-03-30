/**
 * Custom extension to let the user have
 * two extra buttons in the navigation bar
 * of the github repos
 */

function loadButtons() {

  // let underlineNavigation = document.querySelector('.UnderlineNav-body');
  let pageHeaderActions = document.querySelector('.pagehead-actions');

  // if (underlineNavigation) {
  if (pageHeaderActions) {

    let urlParts = window.location.href.toString().split('/');
    let userOrg = urlParts[3];
    let repo = urlParts[4];

    let prefix = "https://github.com/" + userOrg + "/" + repo + "/pulls";
    let linkMyPullRequests = prefix + "/@me";
    let linkMyPendingReviews = prefix + "/review-requested/@me";

    let selector = document.querySelectorAll('.UnderlineNav-body a')

    let myPullRequestsNode = selector[2].cloneNode(2);
    myPullRequestsNode.href = linkMyPullRequests;
    myPullRequestsNode.children[1].textContent = 'My pull requests';
    myPullRequestsNode.className.replace(' selected ', '');
    myPullRequestsNode.children[2].remove();
    myPullRequestsNode.className = "btn btn-primary btn-sm";
    myPullRequestsNode.style = "height:28px;margin:0;";

    // underlineNavigation.insertAdjacentElement("beforeend", myPullRequestsNode);

    let listItem1 = document.createElement('li');
    listItem1.appendChild(myPullRequestsNode);

    pageHeaderActions.insertBefore(listItem1, pageHeaderActions.firstChild);

    let myPendingReviewsNode = selector[2].cloneNode(2);
    myPendingReviewsNode.href = linkMyPendingReviews;
    myPendingReviewsNode.children[1].textContent = "My pending code reviews"
    myPendingReviewsNode.children[2].remove();
    myPendingReviewsNode.className = "btn btn-primary btn-sm";
    myPendingReviewsNode.style = "height:28px;margin:0;";
    // underlineNavigation.insertAdjacentElement("beforeend", myPendingReviewsNode);

    let listItem2 = document.createElement('li');
    listItem2.appendChild(myPendingReviewsNode);
    pageHeaderActions.insertBefore( listItem2, pageHeaderActions.firstChild);

  }

}

// document.addEventListener('click', function (event) {
//
//   console.log('load from click: '+event.target);
// 	// If the clicked element doesn't have the right selector, bail
// 	if (!event.target.matches('.UnderlineNav-item span')) {
// 	  return;
//   }
//
// 	// Don't follow the link
// 	// event.preventDefault();
//
// 	// Log the clicked element in the console
// 	// console.log(event.target);
// 	console.log('uep22222');
// 	loadButtons();
//
// }, false);

// load initial buttons
// document.onreadystatechange = () => {
  console.log('initial load');
  loadButtons();
// }

// };
