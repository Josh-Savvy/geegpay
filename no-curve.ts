export class NoCurve {
	context: any;
	_t: any;
	_line: any;
	_x: any;
	_point: any;
	_y: any;
	constructor(context: any, t: any) {
		this.context = context;
		this._t = t;
	}

	areaStart() {
		this._line = 0;
	}

	areaEnd() {
		this._line = NaN;
	}

	lineStart() {
		this._x = this._y = NaN;
		this._point = 0;
	}

	lineEnd() {
		if (0 < this._t && this._t < 1 && this._point === 2) this.context.lineTo(this._x, this._y);
		if (this._line || (this._line !== 0 && this._point === 1)) this.context.closePath();
		if (this._line >= 0) {
			this._t = 1 - this._t;
			this._line = 1 - this._line;
		}
	}

	point(x: number, y: number) {
		switch (this._point) {
			case 0:
				this._point = 1;
				this._line ? this.context.lineTo(x, y) : this.context.moveTo(x, y);
				break;
			case 1:
				this._point = 2;
				this.context.lineTo(x, y);
				break;
			default:
				this.context.lineTo(x, y);
				break;
		}

		this._x = x;
		this._y = y;
	}
}

export function noCurve(context: any) {
	return new NoCurve(context, {});
}
