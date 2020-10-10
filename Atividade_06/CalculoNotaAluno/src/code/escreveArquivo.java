/*
* 💪 Desafio - Opcional 
* Crie um programa em js que recebe o nome e a atividade do aluno e calcula o atraso das
* atividades, gerando uma nova nota. Exportando essa saída para um documento.
* Regra - 2% por dia de atraso.
*/

package code;

import java.util.Scanner;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;
import jdk.jfr.events.FileWriteEvent;

/**
 *
 * @author Gabriel
 */
public class escreveArquivo {
    
    public static void main(String[] args) {
        Scanner entradaUsuario = new Scanner(System.in);
        
        SimpleDateFormat dataFormatada = new SimpleDateFormat("dd/MM/yyyy");
        
        Calendar calendario = Calendar.getInstance();
        
        System.out.println("Data e hora atual: " + dataFormatada.format(calendario.getTime()));
        
        System.out.println("Digite uma data no formato dd/mm/yyyy");
	String minhaData = entradaUsuario.nextLine();
        
        try {
            Date minhaDataEmDate = dataFormatada.parse(minhaData);
            
            System.out.printf("Minha data: " + dataFormatada.format(minhaDataEmDate));
            
        } catch (ParseException ex) {
            Logger.getLogger(escreveArquivo.class.getName()).log(Level.SEVERE, null, ex);
            ex.printStackTrace();
            
        }
                   
        /*System.out.println("Digite seu nomme");
        String nome = entradaUsuario.nextLine();

        System.out.println("Digite sua nota");
        Integer nota = entradaUsuario.nextInt();

        Calendar c = Calendar.getInstance();
        System.out.println("Data e Hora atual: " + c.getTime());*/

        //Escreve em um arquivo já existente

        /*Path caminho = Paths.get("C:\\Users\\gabri\\Documents\\GitHub\\Atividades-Senai\\Atividades_03\\escritaDeDados.txt");
        String escrita = nome + nota;
        byte [] textoEmByte = escrita.getBytes();
        try{
        Files.write(caminho, textoEmByte);
        }catch(Exception erro){

        }*/

        //cria um arquivo
        /*String caminhoArquivo = ("C:\\\\Users\\\\gabri\\\\Documents\\\\GitHub\\\\Atividades-Senai\\\\Atividades_03\\novoArquivo.txt");
        String textoEscrever = nome + " " + nota;

        try (

        FileWriter criadorDeArquivo = new FileWriter(caminhoArquivo, true);
        BufferedWriter buffer = new BufferedWriter (criadorDeArquivo);
        PrintWriter escritorDeArquivos = new PrintWriter(buffer);

        ){

        escritorDeArquivos.append(textoEscrever);

        } catch (IOException e) {
        e.printStackTrace();

        }*/       
    }
    
}