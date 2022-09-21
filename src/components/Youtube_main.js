// import "./Youtube.css";
// function Youtube(props) {
//   return (
//     <div>
//       <div className="yt__main">
//         {/*//!상단바 */}
//         <div className="yt__top">
//           <div className="yt__top_item">
//             <span>5:10</span>
//           </div>
//           <div className="yt__top_item yt__top_item_left">
//             {/* //!와이파이아이콘 */}
//             <span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//                 width="15px"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
//                 />
//               </svg>
//             </span>
//             <span className="LTE">LTE </span>
//             {/* //!배터리 아이콘 */}
//             <span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//                 width="15px"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
//                 />
//               </svg>
//             </span>
//           </div>
//         </div>
//         <div className="yt__top1">
//           <div className="yt__top1_right">
//             <div className="yt__icon_text">
//               <img
//                 alt="svgImg"
//                 src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTUiIGhlaWdodD0iMTUiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48bGluZWFyR3JhZGllbnQgaWQ9IlBnQl9VSGEyOWgwVHBGVl9tb0pJOWFfOWE0NmJUazNhd3dJX2dyMSIgeDE9IjkuODE2IiB4Mj0iNDEuMjQ2IiB5MT0iOS44NzEiIHkyPSI0MS4zMDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmNDRmNWEiPjwvc3RvcD48c3RvcCBvZmZzZXQ9Ii40NDMiIHN0b3AtY29sb3I9IiNlZTNkNGEiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlNTIwMzAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjUGdCX1VIYTI5aDBUcEZWX21vSkk5YV85YTQ2YlRrM2F3d0lfZ3IxKSIgZD0iTTQ1LjAxMiwzNC41NmMtMC40MzksMi4yNC0yLjMwNCwzLjk0Ny00LjYwOCw0LjI2N0MzNi43ODMsMzkuMzYsMzAuNzQ4LDQwLDIzLjk0NSw0MAljLTYuNjkzLDAtMTIuNzI4LTAuNjQtMTYuNDU5LTEuMTczYy0yLjMwNC0wLjMyLTQuMTctMi4wMjctNC42MDgtNC4yNjdDMi40MzksMzIuMTA3LDIsMjguNDgsMiwyNHMwLjQzOS04LjEwNywwLjg3OC0xMC41NgljMC40MzktMi4yNCwyLjMwNC0zLjk0Nyw0LjYwOC00LjI2N0MxMS4xMDcsOC42NCwxNy4xNDIsOCwyMy45NDUsOHMxMi43MjgsMC42NCwxNi40NTksMS4xNzNjMi4zMDQsMC4zMiw0LjE3LDIuMDI3LDQuNjA4LDQuMjY3CUM0NS40NTEsMTUuODkzLDQ2LDE5LjUyLDQ2LDI0QzQ1Ljg5LDI4LjQ4LDQ1LjQ1MSwzMi4xMDcsNDUuMDEyLDM0LjU2eiI+PC9wYXRoPjxwYXRoIGQ9Ik0zMi4zNTIsMjIuNDRsLTExLjQzNi03LjYyNGMtMC41NzctMC4zODUtMS4zMTQtMC40MjEtMS45MjUtMC4wOTNDMTguMzgsMTUuMDUsMTgsMTUuNjgzLDE4LDE2LjM3Ngl2MTUuMjQ4YzAsMC42OTMsMC4zOCwxLjMyNywwLjk5MSwxLjY1NGMwLjI3OCwwLjE0OSwwLjU4MSwwLjIyMiwwLjg4NCwwLjIyMmMwLjM2NCwwLDAuNzI2LTAuMTA2LDEuMDQtMC4zMTVsMTEuNDM2LTcuNjI0CWMwLjUyMy0wLjM0OSwwLjgzNS0wLjkzMiwwLjgzNS0xLjU2QzMzLjE4NywyMy4zNzIsMzIuODc0LDIyLjc4OSwzMi4zNTIsMjIuNDR6IiBvcGFjaXR5PSIuMDUiPjwvcGF0aD48cGF0aCBkPSJNMjAuNjgxLDE1LjIzN2wxMC43OSw3LjE5NGMwLjY4OSwwLjQ5NSwxLjE1MywwLjkzOCwxLjE1MywxLjUxM2MwLDAuNTc1LTAuMjI0LDAuOTc2LTAuNzE1LDEuMzM0CWMtMC4zNzEsMC4yNy0xMS4wNDUsNy4zNjQtMTEuMDQ1LDcuMzY0Yy0wLjkwMSwwLjYwNC0yLjM2NCwwLjQ3Ni0yLjM2NC0xLjQ5OVYxNi43NDRDMTguNSwxNC43MzksMjAuMDg0LDE0LjgzOSwyMC42ODEsMTUuMjM3eiIgb3BhY2l0eT0iLjA3Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5LDMxLjU2OFYxNi40MzNjMC0wLjc0MywwLjgyOC0xLjE4NywxLjQ0Ny0wLjc3NGwxMS4zNTIsNy41NjhjMC41NTMsMC4zNjgsMC41NTMsMS4xOCwwLDEuNTQ5CWwtMTEuMzUyLDcuNTY4QzE5LjgyOCwzMi43NTUsMTksMzIuMzEyLDE5LDMxLjU2OHoiPjwvcGF0aD48L3N2Zz4="
//               />
//               YOUTUBE
//             </div>
//           </div>
//           <div className="yt__top1_left">
//             {/* //!공유아이콘 */}
//             <div>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//                 width="20px"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
//                 />
//               </svg>
//             </div>
//             {/* //!알림아이콘 */}
//             <div>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//                 width="20px"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
//                 />
//               </svg>
//             </div>
//             {/* //!검색아이콘 */}
//             <div>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//                 width="20px"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
//                 />
//               </svg>
//             </div>
//             <div className="Profile">효택</div>
//           </div>
//         </div>
//         <div className="findbar">
//           {/* //todo radio*/}
//           <div className="find">탐색</div>
//           <div className="findbar_index">
//             <div>음악</div>
//             <div id="new">새로운 맞춤 동영상</div>
//             <div>실시간</div>
//             <div>음악</div>
//           </div>
//         </div>
//         <div className="video">
//           <div className="video_image">
//             <img
//               src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fbbscdn.df.nexon.com%2Fdata7%2Fcommu%2F202208%2F022656_630cf6e0173ca.jpg&type=ofullfill340_600_png"
//               alt="videos"
//               width="300"
//               height="200"
//             />
//             <div className="video_option">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//                 width={20}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
//                 />
//               </svg>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//                 width={20}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
//                 />
//               </svg>
//             </div>
//             <div className="video_progressbar"></div>
//           </div>
//           <div className="overview">
//             <img></img>
//             <div className="title">평범한 내가 이세계에선 고먐미라구?!</div>
//             <div className="title_underbar">
//               <img
//                 src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MzBfMzYg%2FMDAxNjYxODUyMjY0ODM5.RIm4hqQiV165mhDuDb2gZTJSnucszAAHbsd45uGLF2Eg.pC9RZOdefqgLP5tvic0kV5D0hcmVetRDh66NUO3WL1og.JPEG.myorang83%2FKakaoTalk_20220830_152516366_03.jpg&type=l340_165"
//                 alt="1"
//               />
//               <div className="title_underbar_text"></div>
//               <div>고양이의 탐구생활</div>∙<div>조회수 1억회</div>∙
//               <div>1일전</div>
//             </div>
//           </div>
//         </div>
//         <div className="shorts_bar">🎥Shorts</div>
//         <div className="shorts">
//           <div className="vd1">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MzBfOTIg%2FMDAxNjYxODQ2NDU3ODA5.kDyQShYrs9YOCI9Ugn0hYRlbJ5xiSDjUOF_j0Eq_FRgg.kQFTC4riSxYi3GrOPxkPVWV6frs1kLqzlXTzPpKtoZog.JPEG.goodid1205%2Fsaj-shafique-de7Zqg3j3FI-unsplash.jpg&type=a340"
//               alt="dd"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//           <div className="vd2">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MTRfMjg0%2FMDAxNjUyNTAyNTIwNDE0.2SHgDkm42FwGw9Kt60RB1yRFoZeF62J6Usbk8fco6nMg.XWg-82wlU_20WSec8byIDwBCHczolz5hWk2BMdtsIWAg.JPEG.ky0368%2F9069efd245887471be4a22178daf5e57.jpg&type=a340"
//               alt="bb"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//           <div className="vd3">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5486%2F2021%2F10%2F31%2F0000189922_006_20211031162602809.jpg&type=a340"
//               alt="bb"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>

//           <div className="vd1">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MzBfOTIg%2FMDAxNjYxODQ2NDU3ODA5.kDyQShYrs9YOCI9Ugn0hYRlbJ5xiSDjUOF_j0Eq_FRgg.kQFTC4riSxYi3GrOPxkPVWV6frs1kLqzlXTzPpKtoZog.JPEG.goodid1205%2Fsaj-shafique-de7Zqg3j3FI-unsplash.jpg&type=a340"
//               alt="dd"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//           <div className="vd2">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MTRfMjg0%2FMDAxNjUyNTAyNTIwNDE0.2SHgDkm42FwGw9Kt60RB1yRFoZeF62J6Usbk8fco6nMg.XWg-82wlU_20WSec8byIDwBCHczolz5hWk2BMdtsIWAg.JPEG.ky0368%2F9069efd245887471be4a22178daf5e57.jpg&type=a340"
//               alt="bb"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//           <div className="vd3">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5486%2F2021%2F10%2F31%2F0000189922_006_20211031162602809.jpg&type=a340"
//               alt="bb"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>

//           <div className="vd1">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MzBfOTIg%2FMDAxNjYxODQ2NDU3ODA5.kDyQShYrs9YOCI9Ugn0hYRlbJ5xiSDjUOF_j0Eq_FRgg.kQFTC4riSxYi3GrOPxkPVWV6frs1kLqzlXTzPpKtoZog.JPEG.goodid1205%2Fsaj-shafique-de7Zqg3j3FI-unsplash.jpg&type=a340"
//               alt="dd"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//           <div className="vd2">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MTRfMjg0%2FMDAxNjUyNTAyNTIwNDE0.2SHgDkm42FwGw9Kt60RB1yRFoZeF62J6Usbk8fco6nMg.XWg-82wlU_20WSec8byIDwBCHczolz5hWk2BMdtsIWAg.JPEG.ky0368%2F9069efd245887471be4a22178daf5e57.jpg&type=a340"
//               alt="bb"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//           <div className="vd3">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5486%2F2021%2F10%2F31%2F0000189922_006_20211031162602809.jpg&type=a340"
//               alt="bb"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>

//           <div className="vd1">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MzBfOTIg%2FMDAxNjYxODQ2NDU3ODA5.kDyQShYrs9YOCI9Ugn0hYRlbJ5xiSDjUOF_j0Eq_FRgg.kQFTC4riSxYi3GrOPxkPVWV6frs1kLqzlXTzPpKtoZog.JPEG.goodid1205%2Fsaj-shafique-de7Zqg3j3FI-unsplash.jpg&type=a340"
//               alt="dd"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//           <div className="vd2">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MTRfMjg0%2FMDAxNjUyNTAyNTIwNDE0.2SHgDkm42FwGw9Kt60RB1yRFoZeF62J6Usbk8fco6nMg.XWg-82wlU_20WSec8byIDwBCHczolz5hWk2BMdtsIWAg.JPEG.ky0368%2F9069efd245887471be4a22178daf5e57.jpg&type=a340"
//               alt="bb"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//           <div className="vd3">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5486%2F2021%2F10%2F31%2F0000189922_006_20211031162602809.jpg&type=a340"
//               alt="bb"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>

//           <div className="vd1">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MzBfOTIg%2FMDAxNjYxODQ2NDU3ODA5.kDyQShYrs9YOCI9Ugn0hYRlbJ5xiSDjUOF_j0Eq_FRgg.kQFTC4riSxYi3GrOPxkPVWV6frs1kLqzlXTzPpKtoZog.JPEG.goodid1205%2Fsaj-shafique-de7Zqg3j3FI-unsplash.jpg&type=a340"
//               alt="dd"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//           <div className="vd2">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MTRfMjg0%2FMDAxNjUyNTAyNTIwNDE0.2SHgDkm42FwGw9Kt60RB1yRFoZeF62J6Usbk8fco6nMg.XWg-82wlU_20WSec8byIDwBCHczolz5hWk2BMdtsIWAg.JPEG.ky0368%2F9069efd245887471be4a22178daf5e57.jpg&type=a340"
//               alt="bb"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//           <div className="vd3">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5486%2F2021%2F10%2F31%2F0000189922_006_20211031162602809.jpg&type=a340"
//               alt="bb"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>

//           <div className="vd1">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MzBfOTIg%2FMDAxNjYxODQ2NDU3ODA5.kDyQShYrs9YOCI9Ugn0hYRlbJ5xiSDjUOF_j0Eq_FRgg.kQFTC4riSxYi3GrOPxkPVWV6frs1kLqzlXTzPpKtoZog.JPEG.goodid1205%2Fsaj-shafique-de7Zqg3j3FI-unsplash.jpg&type=a340"
//               alt="dd"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//           <div className="vd2">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MTRfMjg0%2FMDAxNjUyNTAyNTIwNDE0.2SHgDkm42FwGw9Kt60RB1yRFoZeF62J6Usbk8fco6nMg.XWg-82wlU_20WSec8byIDwBCHczolz5hWk2BMdtsIWAg.JPEG.ky0368%2F9069efd245887471be4a22178daf5e57.jpg&type=a340"
//               alt="bb"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//           <div className="vd3">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5486%2F2021%2F10%2F31%2F0000189922_006_20211031162602809.jpg&type=a340"
//               alt="bb"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>

//           <div className="vd1">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MzBfOTIg%2FMDAxNjYxODQ2NDU3ODA5.kDyQShYrs9YOCI9Ugn0hYRlbJ5xiSDjUOF_j0Eq_FRgg.kQFTC4riSxYi3GrOPxkPVWV6frs1kLqzlXTzPpKtoZog.JPEG.goodid1205%2Fsaj-shafique-de7Zqg3j3FI-unsplash.jpg&type=a340"
//               alt="dd"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//           <div className="vd2">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MTRfMjg0%2FMDAxNjUyNTAyNTIwNDE0.2SHgDkm42FwGw9Kt60RB1yRFoZeF62J6Usbk8fco6nMg.XWg-82wlU_20WSec8byIDwBCHczolz5hWk2BMdtsIWAg.JPEG.ky0368%2F9069efd245887471be4a22178daf5e57.jpg&type=a340"
//               alt="bb"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//           <div className="vd3">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5486%2F2021%2F10%2F31%2F0000189922_006_20211031162602809.jpg&type=a340"
//               alt="bb"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>

//           <div className="vd1">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MzBfOTIg%2FMDAxNjYxODQ2NDU3ODA5.kDyQShYrs9YOCI9Ugn0hYRlbJ5xiSDjUOF_j0Eq_FRgg.kQFTC4riSxYi3GrOPxkPVWV6frs1kLqzlXTzPpKtoZog.JPEG.goodid1205%2Fsaj-shafique-de7Zqg3j3FI-unsplash.jpg&type=a340"
//               alt="dd"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//           <div className="vd2">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MTRfMjg0%2FMDAxNjUyNTAyNTIwNDE0.2SHgDkm42FwGw9Kt60RB1yRFoZeF62J6Usbk8fco6nMg.XWg-82wlU_20WSec8byIDwBCHczolz5hWk2BMdtsIWAg.JPEG.ky0368%2F9069efd245887471be4a22178daf5e57.jpg&type=a340"
//               alt="bb"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//           <div className="vd3">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5486%2F2021%2F10%2F31%2F0000189922_006_20211031162602809.jpg&type=a340"
//               alt="bb"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>

//           <div className="vd1">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MzBfOTIg%2FMDAxNjYxODQ2NDU3ODA5.kDyQShYrs9YOCI9Ugn0hYRlbJ5xiSDjUOF_j0Eq_FRgg.kQFTC4riSxYi3GrOPxkPVWV6frs1kLqzlXTzPpKtoZog.JPEG.goodid1205%2Fsaj-shafique-de7Zqg3j3FI-unsplash.jpg&type=a340"
//               alt="dd"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//           <div className="vd2">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MTRfMjg0%2FMDAxNjUyNTAyNTIwNDE0.2SHgDkm42FwGw9Kt60RB1yRFoZeF62J6Usbk8fco6nMg.XWg-82wlU_20WSec8byIDwBCHczolz5hWk2BMdtsIWAg.JPEG.ky0368%2F9069efd245887471be4a22178daf5e57.jpg&type=a340"
//               alt="bb"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//           <div className="vd3">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5486%2F2021%2F10%2F31%2F0000189922_006_20211031162602809.jpg&type=a340"
//               alt="bb"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>

//           <div className="vd1">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MzBfOTIg%2FMDAxNjYxODQ2NDU3ODA5.kDyQShYrs9YOCI9Ugn0hYRlbJ5xiSDjUOF_j0Eq_FRgg.kQFTC4riSxYi3GrOPxkPVWV6frs1kLqzlXTzPpKtoZog.JPEG.goodid1205%2Fsaj-shafique-de7Zqg3j3FI-unsplash.jpg&type=a340"
//               alt="dd"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//           <div className="vd2">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MTRfMjg0%2FMDAxNjUyNTAyNTIwNDE0.2SHgDkm42FwGw9Kt60RB1yRFoZeF62J6Usbk8fco6nMg.XWg-82wlU_20WSec8byIDwBCHczolz5hWk2BMdtsIWAg.JPEG.ky0368%2F9069efd245887471be4a22178daf5e57.jpg&type=a340"
//               alt="bb"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//           <div className="vd3">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5486%2F2021%2F10%2F31%2F0000189922_006_20211031162602809.jpg&type=a340"
//               alt="bb"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>

//           <div className="vd1">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MzBfOTIg%2FMDAxNjYxODQ2NDU3ODA5.kDyQShYrs9YOCI9Ugn0hYRlbJ5xiSDjUOF_j0Eq_FRgg.kQFTC4riSxYi3GrOPxkPVWV6frs1kLqzlXTzPpKtoZog.JPEG.goodid1205%2Fsaj-shafique-de7Zqg3j3FI-unsplash.jpg&type=a340"
//               alt="dd"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//           <div className="vd2">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MTRfMjg0%2FMDAxNjUyNTAyNTIwNDE0.2SHgDkm42FwGw9Kt60RB1yRFoZeF62J6Usbk8fco6nMg.XWg-82wlU_20WSec8byIDwBCHczolz5hWk2BMdtsIWAg.JPEG.ky0368%2F9069efd245887471be4a22178daf5e57.jpg&type=a340"
//               alt="bb"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//           <div className="vd3">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5486%2F2021%2F10%2F31%2F0000189922_006_20211031162602809.jpg&type=a340"
//               alt="bb"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>

//           <div className="vd1">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MzBfOTIg%2FMDAxNjYxODQ2NDU3ODA5.kDyQShYrs9YOCI9Ugn0hYRlbJ5xiSDjUOF_j0Eq_FRgg.kQFTC4riSxYi3GrOPxkPVWV6frs1kLqzlXTzPpKtoZog.JPEG.goodid1205%2Fsaj-shafique-de7Zqg3j3FI-unsplash.jpg&type=a340"
//               alt="dd"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//           <div className="vd2">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MTRfMjg0%2FMDAxNjUyNTAyNTIwNDE0.2SHgDkm42FwGw9Kt60RB1yRFoZeF62J6Usbk8fco6nMg.XWg-82wlU_20WSec8byIDwBCHczolz5hWk2BMdtsIWAg.JPEG.ky0368%2F9069efd245887471be4a22178daf5e57.jpg&type=a340"
//               alt="bb"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//           <div className="vd3">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5486%2F2021%2F10%2F31%2F0000189922_006_20211031162602809.jpg&type=a340"
//               alt="bb"
//             />
//             <div className="shortsTitle">
//               <div>vvddss</div>
//               <div className="shortsVote">조회수1000만회</div>
//             </div>
//           </div>
//         </div>
//         <div className="video">
//           <div className="video_image">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MjFfMTAg%2FMDAxNjI5NTUzMDA5MTUx.m-ujc1z9vVNUHTPEDxRfeNHXtg051rVDY2_sEI6aBZog.YMfG3a5yDknNCqZNWgN61UneA_RRldl4__MGgWRbkWAg.PNG.aey0408%2Fimage.png&type=a340"
//               alt="videos"
//               width="300"
//               height="200"
//             />
//             <div className="video_option">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//                 width={20}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
//                 />
//               </svg>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//                 width={20}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
//                 />
//               </svg>
//             </div>
//             <div className="video_progressbar"></div>
//           </div>
//           <div className="overview">
//             <img></img>
//             <div className="title">평범한 내가 이세계에선 고먐미라구?!</div>
//             <div className="title_underbar">
//               <img
//                 src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MzBfMzYg%2FMDAxNjYxODUyMjY0ODM5.RIm4hqQiV165mhDuDb2gZTJSnucszAAHbsd45uGLF2Eg.pC9RZOdefqgLP5tvic0kV5D0hcmVetRDh66NUO3WL1og.JPEG.myorang83%2FKakaoTalk_20220830_152516366_03.jpg&type=l340_165"
//                 alt="1"
//               />
//               <div className="title_underbar_text"></div>
//               <div>고양이의 탐구생활</div>∙<div>조회수 1억회</div>∙
//               <div>1일전</div>
//             </div>
//           </div>
//         </div>
//         <div className="video">
//           <div className="video_image">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MDRfMjcx%2FMDAxNjU2ODY3NzU0NDk2.U1XqUGNUxDVSRtHQjcl7a60bAaWJkIafU290baIwTTwg.N2-JW0Ud18grbIHs5wVcewH2JTb4D1atEGcN4GuNbCMg.PNG.ristonn56%2F3.png&type=a340"
//               alt="videos"
//               width="300"
//               height="200"
//             />
//             <div className="video_option">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//                 width={20}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
//                 />
//               </svg>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//                 width={20}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
//                 />
//               </svg>
//             </div>
//             <div className="video_progressbar"></div>
//           </div>
//           <div className="overview">
//             <img></img>
//             <div className="title">평범한 내가 이세계에선 고먐미라구?!</div>
//             <div className="title_underbar">
//               <img
//                 src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MzBfMzYg%2FMDAxNjYxODUyMjY0ODM5.RIm4hqQiV165mhDuDb2gZTJSnucszAAHbsd45uGLF2Eg.pC9RZOdefqgLP5tvic0kV5D0hcmVetRDh66NUO3WL1og.JPEG.myorang83%2FKakaoTalk_20220830_152516366_03.jpg&type=l340_165"
//                 alt="1"
//               />
//               <div className="title_underbar_text"></div>
//               <div>고양이의 탐구생활</div>∙<div>조회수 1억회</div>∙
//               <div>1일전</div>
//             </div>
//           </div>
//         </div>
//         <div className="video">
//           <div className="video_image">
//             <img
//               src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MThfMjc5%2FMDAxNjYzNDk0MTg1OTEw.I21xUOFUCzTJodLLnX5AEHLMdc-RgOXr7ydDzt0oDrcg.MaoXelfE8Fcq8k5UkAqVAPs3U5OQDkrTeRTHJkmiZvgg.PNG.hongla02%2F20220918_184236.png&type=a340"
//               alt="videos"
//               width="300"
//               height="200"
//             />
//             <div className="video_option">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//                 width={20}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
//                 />
//               </svg>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//                 width={20}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
//                 />
//               </svg>
//             </div>
//             <div className="video_progressbar"></div>
//           </div>
//           <div className="overview">
//             <img></img>
//             <div className="title">평범한 내가 이세계에선 고먐미라구?!</div>
//             <div className="title_underbar">
//               <img
//                 src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MzBfMzYg%2FMDAxNjYxODUyMjY0ODM5.RIm4hqQiV165mhDuDb2gZTJSnucszAAHbsd45uGLF2Eg.pC9RZOdefqgLP5tvic0kV5D0hcmVetRDh66NUO3WL1og.JPEG.myorang83%2FKakaoTalk_20220830_152516366_03.jpg&type=l340_165"
//                 alt="1"
//               />
//               <div className="title_underbar_text"></div>
//               <div>고양이의 탐구생활</div>∙<div>조회수 1억회</div>∙
//               <div>1일전</div>
//             </div>
//           </div>
//         </div>
//         <div className="underbar">
//           <div>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6"
//               width={30}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
//               />
//             </svg>
//             <div className="ub_tag">홈</div>
//           </div>
//           <div>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6"
//               width={30}
//             >
//               <path
//                 strokeLinecap="round"
//                 d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
//               />
//             </svg>

//             <div className="ub_tag">shorts</div>
//           </div>
//           <div>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6"
//               width={50}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//           </div>
//           <div>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
//               />
//             </svg>

//             <div className="ub_tag">구독</div>
//           </div>
//           <div>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6"
//               width={30}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
//               />
//             </svg>

//             <div className="ub_tag">보관함</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Youtube;
