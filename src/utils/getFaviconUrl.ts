function getFaviconUrl(pageUrl: string) {
    // 크롬 내부의 _favicon 주소 생성
    // @ts-expect-error 무시 ㄱ
    const url = new URL(chrome.runtime.getURL('/_favicon/'));

    // 필수 파라미터 세팅 (대상 사이트 URL, 원하는 아이콘 크기)
    url.searchParams.set('pageUrl', pageUrl);
    url.searchParams.set('size', '32'); // 16, 32, 48, 64 등 지정 가능

    return url.toString();
}

export default getFaviconUrl;
