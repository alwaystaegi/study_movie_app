function Kakao() {
  return (
    <div className="overflow-y-auto my-[14px] h-[817px] dark:text-white">
      <div className="bg-white h-[1000px] w-[420px] relative dark:bg-slate-800 dark:text-white">
        {/* //!상단바 */}
        <div className="fixed top-[105px] sm:top-[156px] md:top-[52px] flex justify-between items-center w-[420px] h-10 bg-white dark:bg-gray-700 dark:text-white">
          {/* //!상단바 좌측 요소 */}
          <div className=" font-bold text-2xl">더보기</div>
          {/* //!상단바 우측 요소 */}
          <div className="flex justify-end">
            {/* //!돋보기 */}
            <div className="mx-1 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  width={10}
                />
              </svg>
            </div>
            {/* //!큐알코드 */}
            <div className="mx-1 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                  width={10}
                />
              </svg>
            </div>
            {/* //!음악아이콘 */}
            <div className="mx-1 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                  width={10}
                />
              </svg>
            </div>
            {/* //!설정 아이콘 */}
            <div className="mx-1 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                width="10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* //!프로필 */}
        <div className="flex justify-between my-5 mx-5">
          {/* //!프로필 우측요소...> 사진,이름,이메일 */}
          <div className="flex">
            {/* //!프로필 사진 */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            {/* //!이름 이메일 */}
            <div className="flex flex-col justify-center">
              <div className="font-bold">장효택</div>
              <div className="font-thin">xxxx@naver.com</div>
            </div>
          </div>
          {/* //!프로필 좌측요소...>my버튼 con */}
          <div className="flex mx-2 items-center">
            <div
              className=" border-solid
             border-gray-300
          border-2
          h-7
          rounded-xl
          mx-2
          w-11 text-center
          cursor-pointer
          hover:bg-gray-300
          "
            >
              MY
            </div>
            <div
              className="border-solid
           border-2
           border-gray-300
            h-7
             rounded-xl
             cursor-pointer
             hover:bg-gray-300"
            >
              🥝10
            </div>
          </div>
        </div>
        {/* //!카카오페이 */}
        <div className="flex bg-slate-300 w-[380px] h-[50px] mx-[20px] justify-between rounded-md items-center cursor-pointer">
          {/* //!카카오페이 잔여금액 */}
          <div
            className="border-solid
           border-gray-300
          border-2
          h-7
          rounded-xl
          mx-2
          flex
          my-[6px]
           bg-slate-100
           hover:bg-slate-200
          "
          >
            <div className="font-bold">💬pay</div>{" "}
            <div className="mx-1"> 0원</div>
          </div>
          {/* //!송금 결제 */}
          <div className="flex text-sm mx-4 items-center h-[50px]">
            <div className="mx-2 hover:bg-slate-200 hover:border-slate-400 border-2  border-slate-300 h-8 rounded-lg">
              송금
            </div>
            <div className="mx-2 hover:bg-slate-200 hover:border-slate-400 border-2  border-slate-300 h-8 rounded-lg">
              결제
            </div>
          </div>
        </div>
        {/* //!메뉴아이콘 */}
        <div
          id="메뉴아이콘"
          className="flex w-[380px] h-[270px] mx-[20px] flex-col my-4 "
        >
          {/* //!메뉴아이콘 첫번째 줄 */}
          <div className="flex  justify-around w-[100%] h-[90px]">
            <div id="이모티콘" className="cursor-pointer ">
              <img
                src="data:image/png;base64,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"
                width="40"
              />
              <div className="-mx-2">이모티콘</div>
            </div>
            {/* //!페이지 아이콘 */}
            <div id="페이지" className="cursor-pointer">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAAD09PTPz8/CwsJhYWF0dHTS0tJqamrq6uoxMTH8/PxNTU05OTlkZGSvr68pKSmCgoKnp6dCQkK2tra9vb19fX3c3NxJSUksLCzi4uIICAghISHIyMjt7e1UVFQTExM/Pz+SkpK2iVatAAAD0UlEQVR4nO3dbVPiMBiF4VigSstLeVNcEHX//49cR3ecJxiT0Dw0J8y5P3fbXJOklBUGY35tuqxn3eFuqA7H+Wy1HlW/D0i3dr0ZzGY3X72cBgBum0y+zw6TXXtdXzvJ6fvq8emKwGnWCfzu9eVqwNy07/a76wgxZvCr12us1UVulV2t/vKxy006722sLJznFv1spfrSsczNcfWuuVL3uTXO3v6oAavclt+61xJCLtLPRkrC2j5tMx7sUd9UT+OVj6g0izPrpJ3OSaN7GWAWO+ucW5Vzxjf2L1SVWbRPOcT7NFlAqEK0zzjcJvwqJNRYqOBChVlEEu6frzGLSMLH1vWMnDqLSMLamAf9WQQTOolps4gmdL4fTyLCCY3rv/1SFiqeUHuhAgqVbzeIQudC7T2LkELn7abvLGIKNfciqFBxFlGFensRVqh2R8UVau1FYKHSQkUW6txuoIUqCxVbqHG7ARcq7EV0YfoswguT9yK+MPWOWoAwcS+WIHQu1Og/oRYhdBGPsWMtQ+haqJvIjzMUInTdblZx1yhF6FqocR+DK0boIB6i1mk5QsdefIy5RkFCxyzGfMyvJOFP4iTiGkUJfy7UiJtNWULzfiachf8JkjDixlGdf9o3/HyKJHxeTEI9nP8d/DV4DSRhr4JP4MULg89uxQuPoQeb4oXBF4zyhQ+Ba5QvfAsMunxh6CXxBoR//de4AeHcf40bEN75Xy9uQejfiLcgXHqvkVeo860y/4NbXuFp1Kt7+3sa/jeJeYV921qj9t9MyxSOrFEfvceWKTz75rL32DKFFYUiCjGjUEYhZhTKKMSMQhmFmFEooxAzCmUUYkahjELMKJRRiBmFMgoxo1BGIWYUyijEjEIZhZhRKKMQMwplFGJGoYxCzCiUUYgZhTIKMaNQRiFmFMooxIxCGYWYUSijEDMKZRRiRqGMQswolFGIGYUyCjGjUEYhZhTKKMSMQhmFmFEooxAzCmUUYkahjELMKJRRiBmFMgoxo1BGIWYUyijEjEIZhZhRKKMQMwplFGJGoYxCzCiUUYgZhTIKMaNQRiFmFMooxIxCGYWY9ReeBhphaqcLhJ116HagEaZm/+Jx5z12dsGxONnz4v/V6tqe72aMvxWrcWMPuvYevrwrP/+vx1fhE8AXWHb73ONLbh9Y1eUvU/8i/Wiee4SJzUNAs8s9xMR2QaFZ5B5jUosw0JgmfB7YmhigmeYeZkLTKKGZljqLTSTQmHaSe6y9mrSxwI+25U1jc+E7oXa9yT3ki9qsL5nA/02X9aw75B56sEM3q5eeDfgPlic/b4w0tRcAAAAASUVORK5CYII="
                alt="page"
                width={40}
              />
              <div className="-mx-1">페이지</div>
            </div>
            {/* //!게임아이콘 */}
            <div id="게임" className="cursor-pointer">
              <img
                src="data:image/png;base64,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"
                alt="game"
                width={40}
              />
              <div className="mx-1">게임</div>
            </div>
            {/* //!메이커스 아이콘 */}
            <div className="cursor-pointer">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADYCAMAAAC+/t3fAAAAhFBMVEUeHh7///8AAAApKSkiIiIXFxcMDAwaGhoSEhIcHBzf39/Nzc0EBARnZ2dCQkKSkpKurq6FhYX5+fnh4eG1tbUxMTFeXl46OjrGxsZMTEykpKRubm50dHRVVVX19fXMzMzq6uqCgoK9vb2zs7OVlZU/Pz/W1tZXV1eenp57e3tjY2OUlJTwyziLAAAPUUlEQVR4nN2da3eqOhCGIYaLFhVUVLxrW1u7////24G2mnsmEGSz3w9nrXOOhTwkmUwmk8TzlRql2bZ4zwf/pPL3YpulI3XpPfl/Prxuc68HyrevBwuw627QdYnhGuxegGDrj67Laqv9GgB2XXZdzDpaXg1gswx3XcZ6wtlMBzYvui5gfRVzNdiiRzZD1GChAvvTddGa6o8c7Nx1uZrrLAP7D7g8LxPB3roukxt98mCLrkvkSgsWbN5re0hrMKfBZj0ev3gVMwps2nVpXGr6ABv11I+SC4/uYL30e9Va/oIduy6Jax1/wP6zCvuuMgJ27boc7nWtwHZdF8O9biXY4b8Zmx/KZwTstetStKEFAdt2XYg2tCNgvYgf2mrle6Ouy9CO5t7Tutiw0rPelnpZuy8YBnGIBCVx0DJi5rVnO4YVURjl+6/defqWvi4Wi/Rzmt22y5UXf/+/1l4+9vbtPLiEwpOv2+Y45yKZlU7XRTYuBgmBa6fq9t7E+TNxRMqLi+niJCFidFi/LQfkCwTOy0CwVq4fmaAk36VGqDvc5bYKURI5nhKuPKfDGCZdZ7C7QKF+dcxWpE26LAjBcucpYlJZ8TKVdSmzLmMPoaG7ahs4A8NDUlmZZu3UpNMfUm2BKzRXYCXWpGZlUdW2T5CjzuYGDJNmVCzMBTdr/eGoQToBwwlapS6wSl0KMlb8E2DEEuI3V1il0hyFjdEag5WtcKfISLhrNl8v0nRTKl2sR6af+1nYuKs1BcMhKiRL9neVntN+kpOB4OEAR4P3YnxOrxpTc12ipBlZUzAUTtWl+xyvKl83CePoe85S/iOKwwozzL+m0gyNSumwmRFpBIYD9C6kIfzosnsnfnCinp0Mg7CEG6sya04fjXpaEzBiDHfyQq1veQllfkRA6m6wVbhg0ybmsQEYRqHUxh/eJsQPhk5GcDlry6dSn3mNkVcXrTYYjtBK1gxfbmQeYmfSSq/F28pM0GmP4ppkdcFI9xrLsJZhLS+dGFdUyFrkuW5HqwlGBuWzWIr5OKn9hcmXQh8SI/lZ0+7XAyMf+I9YhnNcG6t6aICSrdjXFvVMSC0wYg43QgHSQWNHiLSD6FN48DqsQ1YHDCeJ0B3IqOPCdSWfrBBM0nVY49E1wAjXkX/3JnA0jyIWMhF8mVMNMnsw0r+E+vpq6tmxzy/4njayb43WYKQf8MPyKHc17f1+g4cCflA7JrZfzhaMmC5+7rWIXfQu5iVIeMnF1jLZgkUo416ZOWyGvyLNkR/+U8uhxBIMCy9cNhq7lO+J0ISbrk2RVSzcDgyjFcdVuIwFMkIDbj7zZdXircBwEp54LusCg18mkA1syGzAiOHgQmyT9rgkZFcbA2JVY+j2tPoqRcjYBpIi+HqaBRhG70/lqshYC7KFN0Y4GA4T9vst2+aSfEsMJrOoMc6jz+zMbz3xw8sRvEYIBsOoYF5xaWX8EhRxPsgOWmVgsBgx04l56N7fkIm4pozfeIiBlhEKhjmLaDWmNBE/dm6APRsIhhOPsU92XkAj8QZkAns1tMZYy2EzoDQX63e/wOwHDIzzEU9h82UeC8WIiV4tQVUGA4vYSfPH8xpiKe6zzsMY8EcgMM7UX57aEEuxwb4b5LuCwCLERG/wcyw9pZCxjKcYUGUQMK7CMukHw0xym13snkmPky1DYLSkSwAZpSFgQ6aHEcsh+01wmz5U2HRCjHLqT89DmdELGPsxB6xQQcCSnP5ccg87YBrLIYbXGeZ8mkjWzjCa0L8BfDgAGEZ0BPMqH0aCkDHJa3hC2xAxUe2RFIz8ip7jLszuBwAsjunKUIwiHBjcWeWdawUYZ/LzxPRcMxhGX3SFKZo3DwZ1JnEYs7M8BRjX0eUGjBagxpgnqsYQAQzaGPl1GxUYaxjNg7QZLBlQD5xhxXqlAAZrjHxDVIN5cUhvud+bepkRjJ2vKCcNIpifm8lwEvDJEEowYEHAYFFCl/jdAuxqnmNHfDxPA+aFmJo5nSLDUrcRjBnEXhKVlygB86emryoGzHVgHrPM82F4uBGMaQBq91MGZpoTYoTFdCod2Af1u8/GYLRNVA8fUrB5op23BUiS26EBYwbUUai3uiawEFO9e62OuEnB9F2cD6MYwTzGRzGE101gTPVrLLgcTOfUYTSQ/YUWbE/98NYQjPYTV2pHRgGmCSJwE34IWDikms9rIzDGkblqmrUCzE9VrRfLUnsMYIwnPA+0zocBjOliOkOkAlPFR8gkTP57HRhroidaR9gAxng84zpgh0g2NcNhoth6oAVL6OLoF0VMYNQIOtPNFZRgCm9YkrMEAIsDyuDrrYcJ7Ey9MtaMHGow2ZRb9H1hYEyXTxuADWkvZqFbN9KAzTy+MZKGOFf9WgvGBIV1tswEFoeUz6N1/TRgYmPkogGEHQy2pf5KNYUCgAXeZ3pXoXsOAzbbsD4g52JiZqAl2tCukhYsfH+UJ811vzQN0NRGAO0khK2xfMuWnJmaCZOwTQyuMRwbIpBgsOFD2t+xYHvE9qER/VUCLntuFmL6p1oweIFc7R9jwbb8ovifR/8UJmFfTMzQBAZVO2BjIX3tPjUjkzD2/1xQr8DCkPUsRr9ZNfwkbIaTpE9ggi/442hiftcI8SV7BcY6LaWqqZkwCSu9/56B8fOtamom/Y89A5NWDp+fWlVjz8AIGTdMLxGfx/lWdby+gXl8euMs5Mbtn5Bq78BwMmR9xg3XEFffg1vvwKSRXkq/04X+gcli80JD7CWYZDXlobvL30MwXQzgEX3tIxgXlqZ0eUyrewmmCm8cho9ASC/BVI2RDl11AFaekHCXfklIBSZvjEx8xwKMCQ1oN5+Ygjm37K533RvVYLKgL90QrcDi/FGebFA/mBPTYZYMHn5jakwSpmcD+hZgjPs5qB9+Y5Y3tJFXDZi4sLJhQ682YNSTrrrItDHEDY286sDILIzJd+QXzeBgzId+1e5oMIFRVT/TVb0WjJua8cuccLA4psYObdewWkbSrdtowdipmRAqh4MldFTvqwlYOAAG7/VgdGxKTCWAgzGRIP3qugEsSqhgmTp9xQiG0X1DwruwqmQBRi3+nLwmS7Xs6KpZ+TOAPaZmkmoHgzGJHoZkTCMYnUyn2ZdmAvudmskSrMBgTI/X2w5zAgvdyTQfyQiGk+pzy/Iz4WB0boZhv6FxtYWOSGsMvhHs2xuW1jkULKAzFueG5HtzLtUZ1BbNYORRC3mmNBSMaYmmhEUzGD10XJSDPQAMx8Qhln0YMBhtyPSjGAAsCOmseKVdhNQYVuzWA4IxuRAHr2kiJmai0lNVW4SAqQQDY2N5+lwID5TsTIelTwEo2bkNsIDZUGFKMAWAsVuRVOajfTDGdJg3JEE2FNAO2lGxd+wJYHRGsLJL3AUI5oTMvlNFamXbYJhJ/9dlTv4IEqVizOxaXmWt1xiTVabJ4f0VaJsVs6q1B2yz2lmBsQE6xTar3FwGRhAw1nyMpN5DFE9TYHaSoDCn/vRNujGO3WV1Amw/hW1lZDYSyg0jppKTLI8hwJF5KyNTqWdHWxm9gIkMKrb7D6HJQDX+lt0UeFANprSA24WZKts848AL9v1Mhj6kwoCxe3bvJ3S7vyvhhMlSgvQw+JZ8po0D9hm5FLcuCjtfBrjawu3JN+4zcil2L6U/SkDLMdBjL7j4+xMbI79nCTCGlQKvj7F5eieLjc7NhEO2f0MPOgCDcWccrZ/VzQI2Q19MCVfI4jAgpqX7n086IoJLAzTvE/4RfKmWsx9lTmLt0oLFbcUv7THwLy0O3EoiNoFIjFU7F0ZDNk8EsFP3R1ZHpDH+h39o/aQjjLgE3DN8mLHJGuA3OJxaJiNc7NG6F4u7hqyOIQz5/FD4UWw1JHCdbA75sjs4Enlsk2+zzjCKuaOQV20dHFm+7IN9V3t1JtQX7Ayguywzc4Z8Uu9h1dIhpsjjuFK7y7xsT52Nha16bRw7iwM04U5LtT0o2PoA5FDIrZw6PyiYvITLk/avtkc72x9ZHQob6Re1zm3XvAIJ6Vdz69Ojaxwyngi5UaOVw+aII4T5T3ewPz69zrHwKBJSEG9OTrv/fjpa8mdGzOCe1F21DvJHkXDY/mXl4KKmyjgNhDtTTjW46iVikjFGPLAiCxtf91becyJecTPynnX1QhUdfRUL8GHYNmkUkl0g9VLv1Pm615sksrzRy6QJWoJyyXb2S1Kv99a+kCaUnu6wqXn/YBnlHkhuTPE3dQfJ+lcIxWgv2yyQftS4aycmjfBTdh3ZtrZJqp/FjT1xvKl03RGTbZGKHZBKHkufRMbH2vao0TVdSHbfDtHpc0/qIIZE+MnvwslUfvJA2sSjaZR3TzraUrF3ZfRWlItDOrhheflYPMlUV7PtGvmgzTYUkIEHK++ZnKe7yc9NeAG9OlRdhletoq3GGxWVv86bDYtNd0qQ5vilucZ1dMnGxQpzd3gnOC++bqkSijiHu5pW3hlYaahj9f2F3zodF5vy5u7d7pZN3zav65Ph7teN19irdrC3hdTHysl1rr86Fg5meC427ZQ7YPbCPVB1df1KXEQb3OxGIu0xGWu6DFzzXXNfupKrbVbEEQm/dFegwmprF7iasroCq9CSyabJjdBpETqZ1FVyB1bFltDgVrOzXTOX93eXYE4vkydzj3DyZn0/+emTVFbiNECZeyuHT/O+qy0o/qgPcxLr6u1jaJvMY9bKm7h9YKnSs13t1O7SQ6P09h5bzQWgmnh79w/1vm/XDVYft81RcWbY/GVzW64C2F29NbT3tq08t1Rc5o2FUb7c3qaby/r4cr2+HNeXzfS2Xa6i0n+EpWzU0tjLWnt2pSD+SYtLwjCOw/D337T7EB0o89J2X/AjMlcJKkVPSjBLvdFzXvRszT3f7UD2j2jle3571qND7QjYa9eFaEMLAnZw5y3+M8pnBMzfdV0M97r5JdhL18Vwr2sF5i+7LodrlblRJdix64K41vEH7H+rsiqZrQIbPft6qlaFR3cwf9p1YVzqO377DTYrui6NOxUzCsyf/zej9OBnZvsD5i+6LpAr/Ubbf8H8t65L5Eb37QF3MP/cdZlc6OyLYP8D2YOLBuu/0acX6mgwf9Fr2zhgVukYMH/U4/GsYCPrLJg/y3rqXeGMW+jhwHz/2kuPeCnE0wUw31+3E/VuUXvJkqMEjMypdz2yIoOddGlHCub7h9dtL+KN+fZVkRukACs1SrNxMVnlg39Q+WpSjLNUs8T4Fzt+yM9x3E3JAAAAAElFTkSuQmCC"
                alt="makers"
                width={40}
              />
              <div className="-mx-3">메이커스</div>
            </div>
          </div>
          {/* //!메뉴아이콘 두번째 줄 */}
          <div className="flex justify-around w-[100%] h-[90px]">
            {/* //! 선물 아이콘 */}
            <div className="cursor-pointer">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACiCAMAAAD1LOYpAAAAY1BMVEX///8AAABWVlb19fX6+vpmZmZqampISEgMDAyoqKjPz8+Ghoa/v7/Jycmvr6+Pj4/l5eUiIiLt7e05OTkYGBh1dXXX19ctLS18fHxQUFC4uLjd3d1dXV2enp4dHR0SEhJBQUFSHurKAAAEpElEQVR4nO2c6dKqMAyGWUVWEdnF5f6v8vjZtAi00DoFnDl5/0mhPKZpSFliGCgU6iflpG1xN1+ybqW9NwxXcX02mTr/9yDt8GgO5MV7I40UVOZEp72hBorPU8LVGB37JUfxoOjII1yF0Y5vtdU0VnGLMoXD4h7KCk/hoTdpq5vw5t1p38fnSXpKBuyoosxeA2Cnfg4bKpV/uignyc2hbnKQEd3/EvQbXdgWaiS0w6krFTI2YKNclR9bnQI2XrURZu6U8GWXZcboQV1jtO+TbE60IXbcGWle0oXjYuGeAdnu6SK89VSPzr33v57zdozprsfJgDoWadFEyDz+6ZOQ2DYMco6xZX7ImVk+adLkjPCHzZqNls3s+hSPdT/KPA7gLzlN6gK3GUaIhFlIZMeIRqkH91/A0AS8NmXBbD4Mt/ajyLdjHw9n27VY0b68+zqPO2N29Hh2jGm0yQXe5mtEhNA2vRAwO3LmTG9jgR/Q4K2aknAFf5dzyWcckzkzP1P+lJL2sw5C4/Tu68jzKDbWo+tMPD9T/gRG1JOPASI3aWB2PH+yRALyD8HQaIo5c4g948eciWkGK04SIrjsuHpWWbfZ/8sYc8rIbHgX2pC5qp6oaLTEKDdRMxvVdHh68XWHpT+60sWSJPKuKDywOfPOKdhMyYWELGRyA+pX8kiHwtSupb73yGRmCjOzt5TKyQtm31no/GysG5/SijNJtmDlhrEv5RyXnKulQ0d1Fs7Ukpn52zTMLqNkIppze/607a12nJWHiS8QW6TV7aiTSOpm1DVsOHc2tlLVnJYsWzbL3aytZvZyE44dahc9xLEyEyzytlcnCFfpc2+yXg0/cljLR24ni0dY09bKTVJHTkZAnNc3uK3kmuTakr05aeKyaMLxR3YDsFCJp8ERELmiiAodXg+A8ZjeZYarsOkrrSS0IxoOXZ5Phppe2AUn2w5RnI3DQrlW620VRLqmKYZbU7JQnrn1sSHilcCMcjmYLMop8CqIEFzy4YSB8Vd+VrMOIiTFwwSaLPHU7wusg2gTmuECGxBV+1oJ0UBERERERERERERERETE30TsLEXB0vbCP5DcSDyrdmp1M4i/JUTUoSGiv3zA9hquALPL3jxTeeNIcDq8Bfe6rYOc4J6kx28lDyIrV60zOLfoaR69/ST7ALYkcVHwVIuEpAO/capA7tyKL31oDd2x3LkRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERUYQo+3HqHojwPmu0ByKYZ+lDfKhaJfuxuVZE+AR+qcJORnbr9kAkL2yPqzRO5MAX8ZKfm+tEvJIzF4tfQIO1i6X99CMeZH0sgIpBcuUvNSLCZw6VxFvvtLaEVMFYfYi0gpVMzQVwCfMofMl/DURWb1JqErDarnmSZgu+K4N4mEd0nCxNWB0fGbsYht1XJsqtOpwVVKGwTtxW4taX+S7C2uor8naSUyvdrbiTRJVbULZT8R+V0m0pt5Lv2pKqZtwr2XywL8qFiDN/00JKlv9Nfb7s6heb2LIq/FRr1W4U6r/VP0OPYsoCO/B5AAAAAElFTkSuQmCC"
                alt="gift"
                width={40}
              />
              <div className="-mx-2">선물하기</div>
            </div>
            {/* //!프렌즈샵 아이콘 */}
            <div className="cursor-pointer">
              <img
                src="data:image/jpeg;base64,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"
                alt="프렌즈샵"
                width={40}
              />
              <div className="-mx-2">프렌즈샵</div>
            </div>
            {/* //!쇼핑하기 */}
            <div className="cursor-pointer">
              <img
                src="data:image/png;base64,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"
                alt="shop"
                width={40}
              />
              <div className="-mx-2">쇼핑하기</div>
            </div>
            {/* //!스타일 */}
            <div className="cursor-pointer">
              <img
                src="data:image/png;base64,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"
                alt="style"
                width={40}
              />
              <div className="-mx-1">스타일</div>
            </div>
          </div>
          {/* //!메뉴아이콘 세번째 줄 */}
          <div className="flex justify-around w-[100%] h-[90px]">
            {/* //! 주문하기 */}
            <div className="cursor-pointer">
              <img
                src="data:image/png;base64,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"
                alt="mill"
                width={40}
              />
              <div className="-mx-2">식사하기</div>
            </div>
            {/* //!멜론티켓 */}
            <div className="cursor-pointer">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                width={40}
              />
              <div className="-mx-2">멜론티켓</div>
            </div>
            {/* //!멜론 */}
            <div className="cursor-pointer">
              <img
                src="data:image/png;base64,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"
                alt=""
                width={40}
              />
              <div className="mx-1">멜론</div>
            </div>
            {/* //!전체서비스 */}
            <div className="cursor-pointer">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwk1dT3D67K2HBlGDooNSh3kKQYRJDAjvuNw&usqp=CAU"
                alt="all servise"
                width={40}
              />
              <div className="-mx-3">전체서비스</div>
            </div>
          </div>
        </div>
        {/* //!~~만들기 */}
        <div className="flex h-14">
          {/* //!메일 만들기 */}
          <div className="mx-5 text-lg cursor-pointer">
            ✉️<span className="font-bold">메일</span>만들기
          </div>
          {/* //!캘린더 일정 만들기 */}
          <div className="mx-10 text-lg cursor-pointer">
            📅<span className="font-bold">캘린더</span> 일정 만들기
          </div>
        </div>
        {/* //!광고 */}
        <div className="  flex justify-center relative">
          <img
            src="data:image/jpeg;base64,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"
            className=" w-[90%] rounded-lg"
          />
          {/* //! AD문구 */}
          <div className="flex absolute right-7 bg-gray-300 rounded-lg w-7 h-5 justify-center text-white text-sm top-1">
            AD
          </div>
          {/* //! 광고 이름 */}
          <div className="absolute bottom-2 left-6 text-white">
            여행할 땐 보람상조
          </div>
          <div className="absolute border-white border-solid border-[1px] text-white bg-gray-500 rounded-md bottom-2 right-7 cursor-pointer">
            알아보기
          </div>
        </div>
        {/* //!하단바 */}
        <div className="flex justify-around fixed bottom-0 w-[420px] bg-slate-100 h-10 items-center">
          {/* //!프로필 */}
          <div className="flex w-[80px] h-8 cursor-pointer hover:bg-gray-300 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          {/* //!메세지 */}
          <div className="flex w-[80px] h-8 cursor-pointer hover:bg-gray-300 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </div>
          {/* //! 해시태그 */}
          <div className="flex w-[80px] h-8 cursor-pointer hover:bg-gray-300 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
              />
            </svg>
          </div>
          {/* //!전체메뉴 */}
          <div className="flex w-[80px] h-8 cursor-pointer hover:bg-gray-300 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kakao;
