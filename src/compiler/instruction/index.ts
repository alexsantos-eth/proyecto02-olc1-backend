// UTILS
import IncrementalAssignment from './variable/incremental'
import VectorPosition from './variable/vectorPosition'
import DynamicListValue from './expression/listValue'
import ContinueValue from './methods/continueValue'
import VectorValue from './expression/vectorValue'
import ExpAssignment from './variable/expression'
import VectorAssignment from './variable/vector'
import Declaration from './variable/declaration'
import FunctionBlock from './methods/functions'
import ReturnValue from './methods/returnValue'
import Assignment from './variable/assignment'
import BreakValue from './methods/breakValue'
import WriteLine from './methods/writeLine'
import Condition from './control/condition'
import Expression from './expression/data'
import FunctionCall from './methods/call'
import GetValue from './methods/getValue'
import SetValue from './methods/setValue'
import CycleControl from './loop/cycle'
import Value from './expression/value'
import Append from './methods/append'
import Switch from './control/switch'
import ForLoop from './loop/forLoop'
import Instruction from './models'
import Main from './methods/main'

// EXPORTS
export {
	Declaration,
	Assignment,
	VectorAssignment,
	Value,
	VectorValue,
	VectorPosition,
	ExpAssignment,
	Expression,
	FunctionBlock,
	FunctionCall,
	WriteLine,
	Main,
	ReturnValue,
	CycleControl,
	Condition,
	ForLoop,
	IncrementalAssignment,
	ContinueValue,
	DynamicListValue,
	Switch,
	BreakValue,
	GetValue,
	SetValue,
	Append,
}
export default Instruction
