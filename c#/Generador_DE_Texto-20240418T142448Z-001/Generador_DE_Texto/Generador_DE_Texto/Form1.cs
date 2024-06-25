using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Threading;

namespace Generador_DE_Texto
{
    public partial class Form1 : Form
    {
        private string comienzo_texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
        private string[] palabras;
        private string[] oraciones;
        private int cantpalabras = 0;
        private int cantparrafos = 0;
        private int cantidad = 0;
        /*
         * Agregar minimo y maximo de palabras a oracion
         */
        private const int contminpal = 15;
        private const int contmaxpal = 30;
        private const int contmaxora = 5;
        private string contenido=" ";
        private string textogenerado = "";
        private int caracteres = 0;
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            AbrirArchivo();
            
        }

        private void labelcomienzotexto_Click(object sender, EventArgs e)
        {
            cbcomienzotexto.Focus();

        }

        private void labeltitulo_Click(object sender, EventArgs e)
        {
            this.Focus();
        }

        private void labelchecked_Click(object sender, EventArgs e)
        {
            tbcantidad.Focus();
        }

        private void btngenerartexto_Click(object sender, EventArgs e)
        {
            tbtextogenerado.Visible = true;
            labeltextogenerado.Visible = true;
            btnguardar.Visible = true;
            if (string.IsNullOrEmpty(tbcantidad.Text))
            {
                MessageBox.Show(this, "Ingrese algun valor.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }
            tbtextogenerado.Text = contenido;
            if (!string.IsNullOrEmpty(tbcantidad.Text))
            {
                ValidarEstado();
                tbcantidad.Text = "";
            }
           

            Thread.Sleep(1500);
        }
        //Se lee el archivo que contiene las palabras y oraciones que se guardan en arreglos
        //los cuales se van a utilizar para generar el texto.
        private void AbrirArchivo()
        {
          
            string texto = "";
            FileInfo f = new FileInfo(@"C:\Users\Usuario\source\repos\Generador_DE_Texto\TextoLoremIpsum.txt");
            FileStream fs = f.Open(FileMode.Open, FileAccess.ReadWrite);
            StreamReader sr = new StreamReader(fs);
            string input = null;
            while ((input = sr.ReadLine()) != null)
            {
                texto += input;
                palabras = texto.Split(' ');
                oraciones = texto.Split('.');
            }
            fs.Close();
            sr.Close();
        }
        //Realiza validaciones para determinar los parametros ingresados por el usuario
        //y de acuerdo a esto generar el texto
        private void ValidarEstado()
        {
            textogenerado = "";
            cantidad = 0;
            if (rbpalabras.Checked == true && cbcomienzotexto.Checked == true)
            {
               
                textogenerado = comienzo_texto;
                cantidad += 8;
                cantpalabras = int.Parse(tbcantidad.Text);
                CargarTexto();
                rbparrafos.Visible = false;
            }
            if (rbpalabras.Checked == true && cbcomienzotexto.Checked == false)
            {
               
                cantidad = 0;
                cantpalabras = int.Parse(tbcantidad.Text);                
                CargarTexto();
                rbparrafos.Visible = false;
            }
            if (rbparrafos.Checked == true && cbcomienzotexto.Checked == true)
            {
                textogenerado = comienzo_texto;
                cantidad =1;
                cantparrafos = int.Parse(tbcantidad.Text);
                CargarTexto();
                rbpalabras.Visible = false;
            }
            if (rbparrafos.Checked == true && cbcomienzotexto.Checked == false)
            {

                cantidad = 0;
                cantparrafos = int.Parse(tbcantidad.Text);
                CargarTexto();
                rbpalabras.Visible = false;
            }

        }
        //Carga el texto en tbtextogenerado
        private void CargarTexto()
        {
            int cont1 = 0;
            int z = 0;
            if (cantpalabras != 0)
            {
                for (int i = cantidad; i< cantpalabras; i++)
                {
                    textogenerado += " "+palabras[cont1];                   
                    if (palabras[cont1].Contains("."))
                    {
                        z++;
                        if (z % 5 == 0)
                        {
                            textogenerado += $" {Environment.NewLine}";
                        }
                    }
                    cont1++;
                }
                cont1 = 0;
                tbtextogenerado.Text = textogenerado;
                Contar(textogenerado);
            }
            else if (cantparrafos!=0)
            {
                cantparrafos = cantparrafos * contmaxora;
                for(int i = cantidad; i < cantparrafos; i++)
                {
                    textogenerado += oraciones[cont1]+".";
                    cont1++;
                    if (i % 5 == 0)
                    {
                        textogenerado += $" {Environment.NewLine}";
                       
                    }
                }
                
                cont1 = 0;
                tbtextogenerado.Text = textogenerado;
                Contar(textogenerado);
            }         
           
        }
        //Cuenta caracteres generados y los muestra en el lblgenerado
        private void Contar(string s)
        {
            caracteres = 0;
            char i;
            for(int j = 0; j < s.Length; j++)
            {
                i = s[j];
                int c = char.ToLower(i);
                if ((c == 'a') || (c == 'b') || (c == 'c') || (c == 'd') || (c == 'e') || (c == 'f') 
                    || (c == 'g') || (c == 'h') || (c == 'i')
                    || (c == 'j') || (c == 'k') || (c == 'l') || (c == 'm') || (c == 'n') ||
                    (c == 'ñ') || (c == 'o') || (c == 'p') || (c == 'q') || (c == 'r') || (c == 's') ||
                    (c == 't') || (c == 'u') || (c == 'v') || (c == 'w') || (c == 'x') || (c == 'y') 
                    || (c == 'z') || (c == '.') ||
                    (c == ',') || (c == ' '))
                {
                    caracteres++;
                }
                lblgenerado.Text = "La cantidad de caracteres generados es:" + caracteres;               
                lblgenerado.Visible = true;
                if (cantpalabras != 0)
                {
                    lblparrafosopalabras.Text = "La cantidad de palabras generadas son: "+cantpalabras;
                    lblparrafosopalabras.Visible = true;
                }
                else if (cantparrafos != 0)
                {
                    cantparrafos = int.Parse(tbcantidad.Text);
                    lblparrafosopalabras.Text = "La cantidad de parrafos generados son: " + cantparrafos;
                    lblparrafosopalabras.Visible = true;
                }
            }
        }
        
        //Guarda el texto en el archivo especificado 
        // De no exister el archivo lo crea
        private void guardarTextoEnArchivo()
        {
            FileInfo fi = new FileInfo(@"C:\Users\Usuario\source\repos\Generador_DE_Texto\SaveTextoLoremIpsum.txt");
            FileStream fs2 = fi.Open(FileMode.OpenOrCreate, FileAccess.ReadWrite);
            StreamWriter sw = new StreamWriter(fs2);
            if (cantpalabras != 0)
            {
                for (int i = 0; i < 1; i++)
                {
                    sw.Write(tbtextogenerado.Text);
                }
                sw.Write(sw.NewLine);
                sw.Write(sw.NewLine);
                sw.Write("Generador de Texto  By Rodrigo KIRSCH");

            }
            else if (cantparrafos != 0)
            {
                for(int i = 0; i < cantidad; i++)
                {
                    sw.Write(tbtextogenerado.Text);
                }
                sw.Write(sw.NewLine);
                sw.Write(sw.NewLine);
                sw.Write("Generador de Texto  By Rodrigo KIRSCH");
            }
            sw.Close();
            fs2.Close();
            
        }
        /*
        # To Do List
       1)Falta metodo para contar caracteres espacios y puntos HECHO
       2)Falta modificar metodo guardar (metodo creararchivo) para que cree y escriba  Hecho
       en un archivo el texto del textbox(es una ensalada rusa ese metodo)
       3)Falta agregar try catch a la hora de trabajar con archivos   contemplado en la logica para prevenir errores     
        */
        //Metodo para guardar texto generado de textbox en un archivo
        //Modificar este metodo
        /*
        private void CrearArchivo()
        {
            string texto = "";
            int j = 0;
            int k = 0;
            FileInfo f = new FileInfo(@"ArchivoGenerado.txt");
            FileStream fss = f.Open(FileMode.OpenOrCreate, FileAccess.ReadWrite);
            StreamWriter sw = new StreamWriter(fss);
            if (rbpalabras.Checked)
            {
                while (j!=cantpalabras)
                {
                    
                    
                        if (rbpalabras.Checked)
                        {
                            texto = comienzo_texto;
                            contenido += texto+" ";
                            sw.Write(texto);
                            j++;
                        }
                        for (int i = 0; i > contminpal && i < contmaxpal; i++)
                        {
                            foreach (string palabra in palabras)
                            {
                                contenido += palabra+" ";
                                if (palabra.Contains("."))
                                {
                                    j++;
                                }
                                sw.Write(palabra + " ");

                            }
                            sw.Write(sw.NewLine);
                        }
                    
                }
                j = 0;
            }
            else if (rbparrafos.Checked)
            {
                while (k!=cantparrafos)
                {
                    
                        if (cbcomienzotexto.Checked)
                        {
                            texto = comienzo_texto;
                            contenido += texto + " ";
                            sw.Write(texto);
                            k++;
                        }
                        for (int i = 0; i > contmaxora; i++)
                        {
                            foreach (string oracion in oraciones)
                            {
                                contenido += oracion + " ";
                                if (oracion.Contains("."))
                                {
                                    k++;
                                }
                                sw.Write(oracion + " ");
                                
                            }
                            sw.Write(sw.NewLine);
                        }
                    
                }
                k = 0;
                fss.Close();
                sw.Close();
            }
       
        }
        */

        private void tbcantidad_TextChanged(object sender, EventArgs e)
        {
            
        }

        private void tbcantidad_KeyPress(object sender, KeyPressEventArgs e)
        {
            
            if (char.IsDigit(e.KeyChar)||char.IsControl(e.KeyChar))
            {
                e.Handled = false;               
            }           
            else if(char.IsLetter(e.KeyChar))
            {
                MessageBox.Show(this, "No se admiten caracteres.", "Error", MessageBoxButtons.OK,MessageBoxIcon.Error);
                e.Handled = true;
            }
            else
            {
                MessageBox.Show(this, "No se admiten caracteres especiales.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                e.Handled = true;
            }

        }

        private void btnguardar_Click(object sender, EventArgs e)
        {
            guardarTextoEnArchivo();
            MessageBox.Show(this, "Se ha guardado el texto.", "Guardar", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            
        }

        private void labeltextogenerado_Click(object sender, EventArgs e)
        {
            this.Focus();
        }

        private void lblgenerado_Click(object sender, EventArgs e)
        {
            this.Focus();
        }

        private void tbtextogenerado_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (char.IsDigit(e.KeyChar) || char.IsLetter(e.KeyChar) || char.IsSymbol(e.KeyChar) || char.IsControl(e.KeyChar) || char.IsWhiteSpace(e.KeyChar) || char.IsSeparator(e.KeyChar) && char.IsPunctuation(e.KeyChar) || char.IsHighSurrogate(e.KeyChar) || char.IsSurrogate(e.KeyChar) || char.IsLowSurrogate(e.KeyChar))
            {
                e.Handled = true;
                MessageBox.Show(this, "NO!! puede escribir o borrar texto.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }
            else
            {
                e.Handled = true;
                MessageBox.Show(this, "NO!! puede escribir o borrar texto.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }
        }

        private void Form1_FormClosing(object sender, FormClosingEventArgs e)
        {
            DialogResult dialogResult = MessageBox.Show(this, "¿Desea guardar el texto?", "Generador de Texto", MessageBoxButtons.YesNo, MessageBoxIcon.Information);
        
            if(dialogResult==DialogResult.Yes)
            {
                guardarTextoEnArchivo();
                MessageBox.Show(this, "Se ha guardado el texto.", "Generador de Texto", MessageBoxButtons.OK, MessageBoxIcon.Information);

            }                   
        }
    }
}