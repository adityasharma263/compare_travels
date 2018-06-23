# -*- coding: utf-8 -*-

from cta.model.hotel import Hotel, Amenity, Image, Deal, Website, Facility, Member
from cta import app
from flask import jsonify, request
from cta.schema.hotel import HotelSchema, AmenitySchema, ImageSchema, DealSchema, WebsiteSchema, FacilitySchema, MemberSchema
import datetime


@app.route('/api/v1/hotel', methods=['GET', 'POST'])
def hotel_api():
    if request.method == 'GET':
        args = request.args.to_dict()
        check_in = request.args.get('check_in')
        check_out = request.args.get('check_out')
        if check_in and check_out:
            check_in = datetime.datetime.fromtimestamp(
                int(check_in)).strftime('%Y-%m-%d %H:%M:%S')
            check_out = datetime.datetime.fromtimestamp(
                int(check_out)).strftime('%Y-%m-%d %H:%M:%S')
            args['check_in'] = check_in
            args['check_out'] = check_out
        args.pop('page', None)
        args.pop('per_page', None)
        page = int(request.args.get('page', 1))
        per_page = int(request.args.get('per_page', 10))
        hotels = Hotel.query.filter_by(**args).offset((page - 1) * per_page).limit(per_page).all()
        result = HotelSchema(many=True).dump(hotels)
        return jsonify({'result': {'hotel': result.data}, 'message': "Success", 'error': False})
    else:
        data = request.json
        hotel = data['hotel']
        hotel_obj = {
        "id": hotel.get("id", None),
        "name" : hotel.get("name", None),
        "city" : hotel.get("city", None),
        'rating' : hotel.get("rating", None),
        "desc" : hotel.get("desc", None),
        "room_type" : hotel.get("room_type", None),
        "address" : hotel.get("address", None),
        "star" : hotel.get("star", None),
        "check_in": datetime.datetime.now(),
        "check_out": datetime.datetime.now(),
        "status" : hotel.get("status", None)
        }
        print(hotel_obj)
        post = Hotel(**hotel_obj)
        post.save()
        member = hotel.get("member", None)
        if member:
            member_obj = {
            "no_of_adults" : member.get("no_of_adults", None),
            "total_members" : member.get("total_members", None),
            "children" : member.get("children", None),
            "hotel_id" : member.get("hotel_id", None),
            }
            print(member_obj)
            Member(**member_obj).save()
        if hotel['facilities']:
            for facility in hotel['facilities']:
                facility_obj = {
                    "hotel_id": facility.get("hotel_id", None),
                    "ac": facility.get("ac", None),
                    "bed_type": facility.get("bed_type", None),
                    "no_of_bed": facility.get("no_of_bed", None),
                    "breakfast": facility.get("breakfast", None),
                    "balcony": facility.get("ac", None),
                    "bathroom_cosmetics": facility.get("bathroom_cosmetics", None),
                    "bathroom_nightie": facility.get("bathroom_nightie", None),
                    "bathroom_towels": facility.get("bathroom_towels", None),
                    "bathroom_with_shower": facility.get("bathroom_with_shower", None),
                    "desk": facility.get("desk", None),
                    "electric_kettle": facility.get("electric_kettle", None),
                    "fan": facility.get("fan", None),
                    "food_serve_at_room": facility.get("food_serve_at_room", None),
                    "free_evening_snacks": facility.get("free_evening_snacks", None),
                    "free_toiletries": facility.get("free_toiletries", None),
                    "hairdryer": facility.get("hairdryer", None),
                    "heater": facility.get("heater", None),
                    "ironing_facility": facility.get("ironing_facility", None),
                    "morning_newspaper": facility.get("morning_newspaper", None),
                    "phone": facility.get("phone", None),
                    "room_safe": facility.get("room_safe", None),
                    "room_seating_area": facility.get("room_seating_area", None),
                    "room_slipper": facility.get("room_slipper", None),
                    "tv": facility.get("tv", None),
                    "view": facility.get("view", None),
                    "wardrobes_closet": facility.get("wardrobes_closet", None),
                    "weighing_machine": facility.get("weighing_machine", None),
                    "wifi": facility.get("wifi", None)
                }
                Facility(**facility_obj).save()
        amenity = hotel.get("amenities", None)
        amenity_obj = {
            "hotel_id": amenity.get("hotel_id", None),
            "Room_cleaning_service": amenity.get("Room_cleaning_service", None),
            "banquets": amenity.get("banquets", None),
            "bar": amenity.get("bar", None),
            "child_baby_cot": amenity.get("child_baby_cot", None),
            "conference_room": amenity.get("conference_room", None),
            "doorman": amenity.get("doorman", None),
            "express_check_in_out": amenity.get("express_check_in_out", None),
            "gym": amenity.get("gym", None),
            "hairdresser": amenity.get("hairdresser", None),
            "indoor_swimming_pool": amenity.get("indoor_swimming_pool", None),
            "laundry_service": amenity.get("laundry_service", None),
            "lift": amenity.get("lift", None),
            "non_smoking_smoking_rooms": amenity.get("non_smoking_smoking_rooms", None),
            "outdoor_swimming_pool": amenity.get("outdoor_swimming_pool", None),
            "pet_allowance": amenity.get("pet_allowance", None),
            "pool": amenity.get("pool", None),
            "porter_service": amenity.get("porter_service", None),
            "restaurant": amenity.get("restaurant", None),
            "spa": amenity.get("spa", None),
            "terrace": amenity.get("terrace", None),
            "twenty_four_hr_reception": amenity.get("twenty_four_hr_reception", None),
            "twenty_four_hr_room_service": amenity.get("twenty_four_hr_room_service", None),
            "wheelchair_accessible": amenity.get("wheelchair_accessible", None),
            "wifi_in_lobby": amenity.get("wifi_in_lobby", None)

        }
        amenity(**amenity_obj).save()
        if hotel['images']:
            for image in hotel['images']:
                image_obj = {
                "hotel_id" : image.get("hotel_id", None),
                "image_url" : image.get("image_url", None)
                }
                print(image_obj)
                Image(**image_obj).save()
        if hotel['deals']:
            for deal in hotel['deals']:
                website_dic = deal["website"]
                deal_obj = {
                "id": deal.get("id", None),
                "price" : deal.get("price", None),
                "weekend" : deal.get("weekend", None),
                "hotel_id" : deal.get("hotel_id", None),
                "website_id" : website_dic.get("id", None)
                }
                if Website.query.filter_by(id=website_dic.get("id", None)).first() is None:
                    website_obj = {
                    "id": website_dic.get("id", None),
                    "website" : website_dic.get("website", None),
                    "logo_image" : website_dic.get("logo_image", None),
                    }
                    print(website_obj)
                    Website(**website_obj).save()
                print(deal_obj)
                Deal(**deal_obj).save()
        # result = HotelSchema().dump(post)
        return jsonify({'result': {'hotel': request.json}, 'message': "Success", 'error': False})


@app.route('/api/v1/amenity', methods=['GET', 'POST'])
def amenity_api():
    if request.method == 'GET':
        args = request.args.to_dict()
        args.pop('page', None)
        args.pop('per_page', None)
        page = int(request.args.get('page', 1))
        per_page = int(request.args.get('per_page', 10))
        data = Amenity.query.filter_by(**args).offset((page - 1) * per_page).limit(per_page).all()
        result = AmenitySchema(many=True).dump(data)
        return jsonify({'result': {'amenities': result.data}, 'message': "Success", 'error': False})
    else:
        post = Amenity(**request.json)
        post.save()
        result = AmenitySchema().dump(post)
        return jsonify({'result': {'amenities': result.data}, 'message': "Success", 'error': False})


@app.route('/api/v1/images', methods=['GET', 'POST'])
def image_api():
    if request.method == 'GET':
        args = request.args.to_dict()
        args.pop('page', None)
        args.pop('per_page', None)
        page = int(request.args.get('page', 1))
        per_page = int(request.args.get('per_page', 10))
        data = Image.query.filter_by(**args).offset((page - 1) * per_page).limit(per_page).all()
        result = ImageSchema(many=True).dump(data)
        return jsonify({'result': {'images': result.data}, 'message': "Success", 'error': False})
    else:
        post = Image(**request.json)
        post.save()
        result = ImageSchema().dump(post)
        return jsonify({'result': {'image': result.data}, 'message': "Success", 'error': False})


@app.route('/api/v1/member', methods=['GET', 'POST'])
def member_api():
    if request.method == 'GET':
        args = request.args.to_dict()
        args.pop('page', None)
        args.pop('per_page', None)
        page = int(request.args.get('page', 1))
        per_page = int(request.args.get('per_page', 10))
        members = Member.query.filter_by(**args).offset((page - 1) * per_page).limit(per_page).all()
        result = MemberSchema(many=True).dump(members)
        return jsonify({'result': {'members': result.data}, 'message': "Success", 'error': False})
    else:
        post = Member(**request.json)
        post.save()
        result = MemberSchema().dump(post)
        return jsonify({'result': {'member': result.data}, 'message': "Success", 'error': False})


@app.route('/api/v1/facility', methods=['GET', 'POST'])
def facility_api():
    if request.method == 'GET':
        args = request.args.to_dict()
        args.pop('page', None)
        args.pop('per_page', None)
        page = int(request.args.get('page', 1))
        per_page = int(request.args.get('per_page', 10))
        data = Facility.query.filter_by(**args).offset((page - 1) * per_page).limit(per_page).all()
        result = FacilitySchema(many=True).dump(data)
        return jsonify({'result': {'facilities': result.data}, 'message': "Success", 'error': False})
    else:
        post = Facility(**request.json)
        post.save()
        result = FacilitySchema().dump(post)
        return jsonify({'result': {'facilities': result.data}, 'message': "Success", 'error': False})


@app.route('/api/v1/website', methods=['GET', 'POST'])
def website_api():
    if request.method == 'GET':
        args = request.args.to_dict()
        args.pop('page', None)
        args.pop('per_page', None)
        page = int(request.args.get('page', 1))
        per_page = int(request.args.get('per_page', 10))
        web = Website.query.filter_by(**args).offset((page - 1) * per_page).limit(per_page).all()
        result = WebsiteSchema(many=True).dump(web)
        return jsonify({'result': {'website': result.data}, 'message': "Success", 'error': False})
    else:
        post = Website(**request.json)
        post.save()
        result = WebsiteSchema().dump(post)
        return jsonify({'result': {'website': result.data}, 'message': "Success", 'error': False})


@app.route('/api/v1/deal', methods=['GET', 'POST'])
def deal_api():
    if request.method == 'GET':
        args = request.args.to_dict()
        args.pop('page', None)
        args.pop('per_page', None)
        page = int(request.args.get('page', 1))
        per_page = int(request.args.get('per_page', 10))
        price = Deal.query.filter_by(**args).offset((page - 1) * per_page).limit(per_page).all()
        result = DealSchema(many=True).dump(price)
        return jsonify({'result': {'deal': result.data}, 'message': "Success", 'error': False})
    else:
        post = Deal(**request.json)
        post.save()
        result = DealSchema().dump(post)
        return jsonify({'result': {'deal': result.data}, 'message': 'Success', 'error': False})