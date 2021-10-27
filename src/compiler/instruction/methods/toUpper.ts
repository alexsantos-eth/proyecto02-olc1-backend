import DataType, { TokenInfo } from '../../utils/types'
import { Expression, FunctionCall, Value } from '..'
import Environment from '../../runtime/environment'
import errors from '../../error'

class ToUpper extends FunctionCall {
	// GLOBALES
	private refType: Value | undefined

	// CONSTRUCTOR
	constructor(token: TokenInfo, props: { id: string; params: Expression[] }) {
		super(token, { ...props, id: 'ToUpper' })
	}

	// COMPILAR
	public compile(env: Environment): boolean {
		if (this.props.params[0] && this.props.params[0].compile(env)) {
			// VERIFICAR TIPO
			if (this.props.params[0].getValue(env)?.getType() === DataType.STRING) {
				this.refType = new Value(this.token, {
					value: this.props.params[0]
						.getValue(env)
						?.getValue(env)
						?.toString()
						.toUpperCase() as string,
					type: DataType.STRING,
				})
				return true
			} else {
				errors.push({
					token: this.token,
					type: 'Semantic',
					msg: `La funcion espera un ${DataType.STRING} como parametro.`,
				})
				return false
			}
		} else return false
	}

	// OBTENER VALOR
	public getValue(): Value | undefined {
		return this.refType
	}
}

export default ToUpper
