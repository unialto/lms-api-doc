/**
 * @api {get} /admin/v1/products/{id} 07. 상품 조회
 *
 * @apiDescription 상품관리 > 상품 조회
 * 
 *
 * @apiVersion 1.0.0
 * @apiName admin_getUserConsultation
 * @apiGroup 1. Admin API > 2. 상품
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/products/P1722476566849400'
 *
 * @apiParam (Path) {String} id 상품 식별키
 *
 * @apiSuccess {String} id 상품 식별키
 * @apiSuccess {String} consultationDate 상담날짜 (yyyy-mm-dd HH:mm)
 * @apiSuccess {String} type 과정여부 체크(CURRICULUM시에 체크, null 체크X)
 * @apiSuccess {String} lessonType 상담내용
 * @apiSuccess {String} name 상담직원 식별키
 * @apiSuccess {String} price 상단고정 [체크:Y 아닐시 N]
 * @apiSuccess {String} quantityUnit 상담 내용 굵게 [체크:Y 아닐시 N]
 * @apiSuccess {String} options 배경색 [10:배경색 없음, 20:주황색, 30:노랑색, 40형광색]
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "id": "P1722476566849400",
    "type": "패키지",
    "language": "영어",
    "lessonType": "PT",
    "name": "패키지1",
    "price": 13000,
    "quantityUnit": "개",
    "options": [
        "SILVER",
        "SILVER"
    ],
    "sort": 82
}
 */