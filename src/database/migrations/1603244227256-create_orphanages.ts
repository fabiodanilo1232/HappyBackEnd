import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1603244227256 implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<void> {
        //realiza alterações(criar tabela, criar campo, deletar)
        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns:[
                {
                    name:'id',
                    type:'integer',
                    unsigned:true,//ser sempre positivo
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy: 'increment'
                },
                {
                    name:'name',
                    type:'varchar'
                },
                {
                    name:'latitude',
                    type:'decimal',
                    scale:10,//depois da virgula
                    precision:2//antes da virgula
                },
                {
                    name:'longitude',
                    type:'decimal',
                    scale:10,
                    precision:2
                },
                {
                    name:'about',
                    type:'text'
                },
                {
                    name:'instructions',
                    type:'text'
                },
                {
                    name:'opening_hours',
                    type:'varchar'
                },
                {
                    name:'open_on_weekends',
                    type:'boolean',
                    default:false
                }
            ]
        }))
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        //desfaz oq foi feito no up
        await queryRunner.dropTable('orphanages');
    }

}
