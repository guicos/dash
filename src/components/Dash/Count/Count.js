import Cnae from '../../../connections/cnae';
import Company from '../../../connections/company';
import Decision from '../../../connections/decision';
import Departament from '../../../connections/departament';
import Office from '../../../connections/office';
import Sector from '../../../connections/sector';
import styled from './Count.module.css';

const cnae = await Cnae();
const company = await Company();
const decision = await Decision();
const departament = await Departament();
const sector = await Sector();
const office = await Office();

export default function Count(){
    const count = [
        { id: 1, name: 'Cnae', count: cnae.length },
        { id: 2, name: 'Empresa', count: company.length },
        { id: 3, name: 'Decisores', count: decision.length },
        { id: 4, name: 'Departamento', count: departament.length },
        { id: 5, name: 'Cargo', count: office.length },
        { id: 6, name: 'Setor', count: sector.length },
    ]
    
    return(
        <section>
            <div className={styled.div}>
                <h1 className={styled.h1}>Bem-vindo!</h1>
                <span className={styled.span}>Total de cadastros</span>
                <ul className={styled.ul}>
                {
                    count.map(element => (
                            <li key={element?.id} className={styled.li}>
                                <span className={styled.span}>{element.name}</span>
                                <span className={styled.span}>{element.count}</span>
                            </li>
                            ))
                        }
                        </ul>
            </div>
        </section>
    )
}