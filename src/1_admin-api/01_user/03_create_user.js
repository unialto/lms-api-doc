/**
 * @api {post} /admin/v1/users 03. 회원 등록
 *
 * @apiDescription 회원관리 > 회원 등록 <br/>
 *  사용자등록, 직원등록 시 사용 > type 필드는 필수입니다
 *
 * @apiVersion 1.0.0
 * @apiName admin_createUser
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/admin/v1/users' \
 * -H "Content-Type: application/json" \
 * -d "{
    "name": "테스터",
    "firstNameEn": "Ster",
    "lastNameEn": "Te",
    "nickname": "별명스",
    "textbook": "왕초보 1권",
    "loginId": "test12346",
    "email": "test12345@naver.com",
    "isReceiveEmail": true,
    "password": "11111",
    "gender": "M",
    "phone": "02-1111-2222",
    "phoneType": "H",
    "cellPhone": "010-1234-5678",
    "isReceiveSms": true,
    "isOfficeWorker": true,
    "company": "남산회사",
    "position": "대리",
    "note": "놈놈놈",
    "isActive": true,
    "zipcode": "12345",
    "address": "서울시 중구",
    "detailedAddress": "남산타워",
    "addressType": "C",
    "joinPath": "ONLINE",
    "languages": ["EN", "KR", "ETC"],
    "etcLanguage": "아랍어",
    "languageSkills": [{"languageTest": "TOEIC", "score": "900점이상"}, {"languageTest": "HKC", "score": "만점"}],
    "foreignCountry": "호주",
    "foreignPeriod": "1년",
    "foreignPurpose": "여행",
    "coursePurposes": ["STUDY_ABROAD", "DEVELOPMENT"]
}"
 *
 * @apiParam (Body) {String} name 이름
 * @apiParam (Body) {String} [firstNameEn] 영문 이름(이름)
 * @apiParam (Body) {String} [lastNameEn] 영문 이름(성)
 * @apiParam (Body) {String} [nickname] 닉네임
 * @apiParam (Body) {String} [textbook] 교재
 * @apiParam (Body) {String} loginId 아이디
 * @apiParam (Body) {String} email 이메일
 * @apiParam (Body) {Boolean} [isReceiveEmail] 이메일 수신 여부
 * @apiParam (Body) {String} password 비밀번호
 * @apiParam (Body) {String} gender 성별 (M:남, F:여)
 * @apiParam (Body) {String} [phone] 유선전화
 * @apiParam (Body) {String} [phoneType] 유선전화 유형 (H:자택, C:직장)
 * @apiParam (Body) {String} cellPhone 휴대전화번호 
 * @apiParam (Body) {Boolean} [isReceiveSms] SMS 수신 여부
 * @apiParam (Body) {String} type 사용자 인지 직원인지 구분 (사용자:S , 직원: A)
 * @apiParam (Body) {Boolean} [isOfficeWorker] 직장인 여부
 * @apiParam (Body) {String} [company] 직장/학교
 * @apiParam (Body) {String} [position] 직책/학과
 * @apiParam (Body) {String} [note] 특이사항
 * @apiParam (Body) {Boolean} [isActive] 활동 여부
 * @apiParam (Body) {String} [zipcode] 우편번호
 * @apiParam (Body) {String} [address] 주소
 * @apiParam (Body) {String} [detailedAddress] 상세 주소
 * @apiParam (Body) {String} [addressType] 주소 유형 (H:자택, C:직장)
 * @apiParam (Body) {String} [joinPath] 가입 경로 ( SIGN:간판, ONLINE:온라인검색, RECOMMEND:지인추천, FAN:부채, LEAFLET:3단리플릿, SUBWAY:지하철광고, ALLIANCE:기업제휴,  ETC: 기타)
 * @apiParam (Body) {String[]} [languages] 학습희망언어 목록 (EN:영어, CN:중국어, JP:일본어, KR:한국어, ETC:기타)
 * @apiParam (Body) {String} [etcLanguage] 학습희망언어 기타
 * @apiParam (Body) {Object[]} [languageSkills] 외국어실력 목록
 * @apiParam (Body) {String} languageSkills.languageTest 외국어시험 (SJPT, HKC, TOEIC, TSC, TOEIC-S, OPIc, 기타)
 * @apiParam (Body) {String} languageSkills.score 외국어시험 점수 (900점이상, 800-900점, ...)
 * @apiParam (Body) {String} [foreignCountry] 외국거주경험 국가명
 * @apiParam (Body) {String} [foreignPeriod] 외국거주경험 기간
 * @apiParam (Body) {String} [foreignPurpose] 외국거주경험 목적
 * @apiParam (Body) {String[]} [coursePurposes] 수강의 목적 (STUDY_ABROAD:유학, TEST:시험, EMPLOYMENT:취업, WORK:업무, DEVELOPMENT:자기계발)
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */