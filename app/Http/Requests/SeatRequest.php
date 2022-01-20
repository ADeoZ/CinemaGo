<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SeatRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'seats' => ['required', 'array'],
            'seats.*.id' => ['integer'],
            'seats.*.number' => ['required', 'integer'],
            'seats.*.status' => ['required', 'string'],
            'seats.*.hall_id' => ['integer'],
        ];
    }
}
