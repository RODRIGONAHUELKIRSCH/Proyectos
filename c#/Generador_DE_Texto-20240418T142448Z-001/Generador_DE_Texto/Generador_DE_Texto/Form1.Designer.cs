
using System;

namespace Generador_DE_Texto
{
    partial class Form1
    {
        /// <summary>
        /// Variable del diseñador necesaria.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpiar los recursos que se estén usando.
        /// </summary>
        /// <param name="disposing">true si los recursos administrados se deben desechar; false en caso contrario.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código generado por el Diseñador de Windows Forms

        /// <summary>
        /// Método necesario para admitir el Diseñador. No se puede modificar
        /// el contenido de este método con el editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.panelparametros = new System.Windows.Forms.Panel();
            this.btngenerartexto = new System.Windows.Forms.Button();
            this.labeltitulo = new System.Windows.Forms.Label();
            this.groupBoxparametros = new System.Windows.Forms.GroupBox();
            this.labelchecked = new System.Windows.Forms.Label();
            this.tbcantidad = new System.Windows.Forms.TextBox();
            this.cbcomienzotexto = new System.Windows.Forms.CheckBox();
            this.labelcomienzotexto = new System.Windows.Forms.Label();
            this.rbparrafos = new System.Windows.Forms.RadioButton();
            this.rbpalabras = new System.Windows.Forms.RadioButton();
            this.tbtextogenerado = new System.Windows.Forms.TextBox();
            this.labeltextogenerado = new System.Windows.Forms.Label();
            this.btnguardar = new System.Windows.Forms.Button();
            this.lblgenerado = new System.Windows.Forms.Label();
            this.lblparrafosopalabras = new System.Windows.Forms.Label();
            this.panelparametros.SuspendLayout();
            this.groupBoxparametros.SuspendLayout();
            this.SuspendLayout();
            // 
            // panelparametros
            // 
            this.panelparametros.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.panelparametros.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(192)))), ((int)(((byte)(255)))));
            this.panelparametros.BackgroundImageLayout = System.Windows.Forms.ImageLayout.None;
            this.panelparametros.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.panelparametros.Controls.Add(this.btngenerartexto);
            this.panelparametros.Controls.Add(this.labeltitulo);
            this.panelparametros.Controls.Add(this.groupBoxparametros);
            this.panelparametros.Dock = System.Windows.Forms.DockStyle.Left;
            this.panelparametros.Location = new System.Drawing.Point(0, 0);
            this.panelparametros.Margin = new System.Windows.Forms.Padding(0);
            this.panelparametros.MinimumSize = new System.Drawing.Size(220, 450);
            this.panelparametros.Name = "panelparametros";
            this.panelparametros.Size = new System.Drawing.Size(247, 465);
            this.panelparametros.TabIndex = 0;
            // 
            // btngenerartexto
            // 
            this.btngenerartexto.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(135)))), ((int)(((byte)(165)))), ((int)(((byte)(163)))));
            this.btngenerartexto.Dock = System.Windows.Forms.DockStyle.Bottom;
            this.btngenerartexto.FlatAppearance.BorderSize = 2;
            this.btngenerartexto.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btngenerartexto.Font = new System.Drawing.Font("Calibri", 14.25F, System.Drawing.FontStyle.Underline, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btngenerartexto.Location = new System.Drawing.Point(0, 420);
            this.btngenerartexto.Name = "btngenerartexto";
            this.btngenerartexto.Size = new System.Drawing.Size(245, 43);
            this.btngenerartexto.TabIndex = 7;
            this.btngenerartexto.Text = "Generar Texto";
            this.btngenerartexto.UseVisualStyleBackColor = false;
            this.btngenerartexto.Click += new System.EventHandler(this.btngenerartexto_Click);
            // 
            // labeltitulo
            // 
            this.labeltitulo.AutoSize = true;
            this.labeltitulo.Dock = System.Windows.Forms.DockStyle.Top;
            this.labeltitulo.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Underline, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.labeltitulo.Location = new System.Drawing.Point(0, 0);
            this.labeltitulo.Name = "labeltitulo";
            this.labeltitulo.Size = new System.Drawing.Size(229, 20);
            this.labeltitulo.TabIndex = 6;
            this.labeltitulo.Text = "Parametros generador de texto";
            this.labeltitulo.Click += new System.EventHandler(this.labeltitulo_Click);
            // 
            // groupBoxparametros
            // 
            this.groupBoxparametros.Controls.Add(this.labelchecked);
            this.groupBoxparametros.Controls.Add(this.tbcantidad);
            this.groupBoxparametros.Controls.Add(this.cbcomienzotexto);
            this.groupBoxparametros.Controls.Add(this.labelcomienzotexto);
            this.groupBoxparametros.Controls.Add(this.rbparrafos);
            this.groupBoxparametros.Controls.Add(this.rbpalabras);
            this.groupBoxparametros.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.groupBoxparametros.Location = new System.Drawing.Point(3, 35);
            this.groupBoxparametros.Name = "groupBoxparametros";
            this.groupBoxparametros.Size = new System.Drawing.Size(239, 356);
            this.groupBoxparametros.TabIndex = 5;
            this.groupBoxparametros.TabStop = false;
            this.groupBoxparametros.Text = "Seleccione una de las dos opciones:";
            // 
            // labelchecked
            // 
            this.labelchecked.AutoSize = true;
            this.labelchecked.Location = new System.Drawing.Point(-3, 291);
            this.labelchecked.Name = "labelchecked";
            this.labelchecked.Size = new System.Drawing.Size(184, 32);
            this.labelchecked.TabIndex = 5;
            this.labelchecked.Text = "Ingrese cantidad de palabras\r\n o parrafos:";
            this.labelchecked.Click += new System.EventHandler(this.labelchecked_Click);
            // 
            // tbcantidad
            // 
            this.tbcantidad.Dock = System.Windows.Forms.DockStyle.Bottom;
            this.tbcantidad.Location = new System.Drawing.Point(3, 331);
            this.tbcantidad.Name = "tbcantidad";
            this.tbcantidad.Size = new System.Drawing.Size(233, 22);
            this.tbcantidad.TabIndex = 4;
            this.tbcantidad.TextChanged += new System.EventHandler(this.tbcantidad_TextChanged);
            this.tbcantidad.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.tbcantidad_KeyPress);
            // 
            // cbcomienzotexto
            // 
            this.cbcomienzotexto.AutoSize = true;
            this.cbcomienzotexto.Checked = true;
            this.cbcomienzotexto.CheckState = System.Windows.Forms.CheckState.Checked;
            this.cbcomienzotexto.Location = new System.Drawing.Point(8, 219);
            this.cbcomienzotexto.Name = "cbcomienzotexto";
            this.cbcomienzotexto.Size = new System.Drawing.Size(195, 36);
            this.cbcomienzotexto.TabIndex = 3;
            this.cbcomienzotexto.Text = "\"Lorem ipsum dolor sit amet,\r\n consectetur adipiscing elit\"";
            this.cbcomienzotexto.UseVisualStyleBackColor = true;
            // 
            // labelcomienzotexto
            // 
            this.labelcomienzotexto.AutoSize = true;
            this.labelcomienzotexto.Location = new System.Drawing.Point(-2, 164);
            this.labelcomienzotexto.Name = "labelcomienzotexto";
            this.labelcomienzotexto.Size = new System.Drawing.Size(244, 16);
            this.labelcomienzotexto.TabIndex = 2;
            this.labelcomienzotexto.Text = "Desea que el texto generado contenga:";
            this.labelcomienzotexto.Click += new System.EventHandler(this.labelcomienzotexto_Click);
            // 
            // rbparrafos
            // 
            this.rbparrafos.AutoSize = true;
            this.rbparrafos.Location = new System.Drawing.Point(8, 116);
            this.rbparrafos.Name = "rbparrafos";
            this.rbparrafos.Size = new System.Drawing.Size(77, 20);
            this.rbparrafos.TabIndex = 1;
            this.rbparrafos.Text = "Parrafos";
            this.rbparrafos.UseVisualStyleBackColor = true;
            // 
            // rbpalabras
            // 
            this.rbpalabras.AutoSize = true;
            this.rbpalabras.Checked = true;
            this.rbpalabras.Location = new System.Drawing.Point(8, 59);
            this.rbpalabras.Name = "rbpalabras";
            this.rbpalabras.Size = new System.Drawing.Size(81, 20);
            this.rbpalabras.TabIndex = 0;
            this.rbpalabras.TabStop = true;
            this.rbpalabras.Text = "Palabras";
            this.rbpalabras.UseVisualStyleBackColor = true;
            // 
            // tbtextogenerado
            // 
            this.tbtextogenerado.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.tbtextogenerado.Location = new System.Drawing.Point(246, 36);
            this.tbtextogenerado.Multiline = true;
            this.tbtextogenerado.Name = "tbtextogenerado";
            this.tbtextogenerado.ScrollBars = System.Windows.Forms.ScrollBars.Both;
            this.tbtextogenerado.Size = new System.Drawing.Size(554, 394);
            this.tbtextogenerado.TabIndex = 1;
            this.tbtextogenerado.Visible = false;
            this.tbtextogenerado.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.tbtextogenerado_KeyPress);
            // 
            // labeltextogenerado
            // 
            this.labeltextogenerado.AutoSize = true;
            this.labeltextogenerado.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Underline, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.labeltextogenerado.Location = new System.Drawing.Point(250, 9);
            this.labeltextogenerado.Name = "labeltextogenerado";
            this.labeltextogenerado.Size = new System.Drawing.Size(250, 20);
            this.labeltextogenerado.TabIndex = 2;
            this.labeltextogenerado.Text = "Se ha generado el siguiente texto:";
            this.labeltextogenerado.Visible = false;
            this.labeltextogenerado.Click += new System.EventHandler(this.labeltextogenerado_Click);
            // 
            // btnguardar
            // 
            this.btnguardar.AutoSize = true;
            this.btnguardar.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(192)))), ((int)(((byte)(100)))));
            this.btnguardar.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnguardar.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnguardar.Location = new System.Drawing.Point(642, 7);
            this.btnguardar.Name = "btnguardar";
            this.btnguardar.Size = new System.Drawing.Size(146, 28);
            this.btnguardar.TabIndex = 3;
            this.btnguardar.Text = "Guardar Texto";
            this.btnguardar.UseVisualStyleBackColor = false;
            this.btnguardar.Visible = false;
            this.btnguardar.Click += new System.EventHandler(this.btnguardar_Click);
            // 
            // lblgenerado
            // 
            this.lblgenerado.AutoSize = true;
            this.lblgenerado.Dock = System.Windows.Forms.DockStyle.Bottom;
            this.lblgenerado.Location = new System.Drawing.Point(247, 452);
            this.lblgenerado.Name = "lblgenerado";
            this.lblgenerado.Size = new System.Drawing.Size(13, 13);
            this.lblgenerado.TabIndex = 4;
            this.lblgenerado.Text = "1";
            this.lblgenerado.Visible = false;
            this.lblgenerado.Click += new System.EventHandler(this.lblgenerado_Click);
            // 
            // lblparrafosopalabras
            // 
            this.lblparrafosopalabras.AutoSize = true;
            this.lblparrafosopalabras.Dock = System.Windows.Forms.DockStyle.Bottom;
            this.lblparrafosopalabras.Location = new System.Drawing.Point(247, 439);
            this.lblparrafosopalabras.Name = "lblparrafosopalabras";
            this.lblparrafosopalabras.Size = new System.Drawing.Size(13, 13);
            this.lblparrafosopalabras.TabIndex = 5;
            this.lblparrafosopalabras.Text = "2";
            this.lblparrafosopalabras.Visible = false;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.AutoSize = true;
            this.BackColor = System.Drawing.SystemColors.Control;
            this.ClientSize = new System.Drawing.Size(800, 465);
            this.Controls.Add(this.lblparrafosopalabras);
            this.Controls.Add(this.lblgenerado);
            this.Controls.Add(this.btnguardar);
            this.Controls.Add(this.labeltextogenerado);
            this.Controls.Add(this.tbtextogenerado);
            this.Controls.Add(this.panelparametros);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.MinimumSize = new System.Drawing.Size(816, 489);
            this.Name = "Form1";
            this.Text = "Generador de Texto";
            this.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.Form1_FormClosing);
            this.Load += new System.EventHandler(this.Form1_Load);
            this.panelparametros.ResumeLayout(false);
            this.panelparametros.PerformLayout();
            this.groupBoxparametros.ResumeLayout(false);
            this.groupBoxparametros.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        private void label1_Click(object sender, EventArgs e)
        {
            throw new NotImplementedException();
        }

        #endregion

        private System.Windows.Forms.Panel panelparametros;
        private System.Windows.Forms.GroupBox groupBoxparametros;
        private System.Windows.Forms.Label labeltitulo;
        private System.Windows.Forms.Button btngenerartexto;
        private System.Windows.Forms.RadioButton rbparrafos;
        private System.Windows.Forms.RadioButton rbpalabras;
        private System.Windows.Forms.TextBox tbcantidad;
        private System.Windows.Forms.CheckBox cbcomienzotexto;
        private System.Windows.Forms.Label labelcomienzotexto;
        private System.Windows.Forms.TextBox tbtextogenerado;
        private System.Windows.Forms.Label labeltextogenerado;
        private System.Windows.Forms.Button btnguardar;
        private System.Windows.Forms.Label labelchecked;
        private System.Windows.Forms.Label lblgenerado;
        private System.Windows.Forms.Label lblparrafosopalabras;
    }
}

